from pathlib import Path
import csv
from pypdf import PdfReader
from reportlab.platypus import SimpleDocTemplate, PageBreak, Paragraph
from reportlab.lib.styles import getSampleStyleSheet
from reportlab.lib.units import inch
from reportlab.lib.pagesizes import A4
from abc import ABC, abstractmethod


class BaseReader(ABC):
    def __init__(self, file_path) -> None:
        self.file_path = file_path

    @abstractmethod
    def read(self):
        pass

    @abstractmethod
    def write(self, data, output_file=None):
        pass


class ReaderFactory:
    readers = {
        ".pdf": lambda file_path: CustomPdfReader(file_path),
        ".txt": lambda file_path: CustomTextReader(file_path),
        ".csv": lambda file_path: CustomCsvReader(file_path),
    }

    @staticmethod
    def get_reader(file_path: Path):
        reader_class = ReaderFactory.readers.get(file_path.suffix)
        if reader_class:
            return reader_class(file_path)
        raise ValueError("Unsupported file type")


class CustomPdfReader(BaseReader):
    def read(self):
        text = ""
        with open(self.file_path, "rb") as f:
            reader = PdfReader(f)
            for page in reader.pages:
                text += page.extract_text()
        return text


    def write(self, data, output_file=None):
        output_file = output_file or str(self.file_path).replace(".pdf", "_encrypted.pdf")
        doc = SimpleDocTemplate(
            output_file,
            pagesize=A4,
            bottomMargin=0.4 * inch,
            topMargin=0.6 * inch,
            rightMargin=0.8 * inch,
            leftMargin=0.8 * inch,
        )
        story = []
        styles = getSampleStyleSheet()
        preformatted_style = styles["Normal"]

        preformatted = Paragraph(data, preformatted_style)
        story.append(preformatted)
        story.append(PageBreak())
        doc.build(story)


class CustomTextReader(BaseReader):
    def read(self):
        with open(self.file_path, "r", encoding="utf-8") as f:
            return f.read()

    def write(self, data, output_file=None):
        output_file = output_file or self.file_path.with_name(self.file_path.stem + "_encrypted.txt")
        with open(output_file, "w", encoding="utf-8") as f:
            f.write(data)


class CustomCsvReader(BaseReader):
    def read(self):
        with open(self.file_path, "r", encoding="utf-8") as f:
            reader = csv.reader(f)
            return [row for row in reader]

    def write(self, data, output_file=None):
        output_file = output_file or self.file_path.with_name(self.file_path.stem + "_encrypted.csv")
        with open(output_file, "w", newline="", encoding="utf-8") as f:
            writer = csv.writer(f)
            writer.writerows(data)


def CaesarCipher(text, shift, decrypt=False):
    if decrypt:
        shift = -shift
    result = []
    for char in text:
        if char.isalpha():
            offset = 65 if char.isupper() else 97
            result.append(chr((ord(char) - offset + shift) % 26 + offset))
        else:
            result.append(char)
    return "".join(result)


if __name__ == "__main__":
    path = Path(__file__).resolve().parent
    filename = path / "Oluwatoyin.pdf"
    reader = ReaderFactory.get_reader(filename)

    readfile = reader.read()
    encrypted = CaesarCipher(readfile, 3)
    reader.write(encrypted)
