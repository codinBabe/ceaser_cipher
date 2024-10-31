from pathlib import Path
import csv
from pypdf import PdfReader
from reportlab.platypus import SimpleDocTemplate, PageBreak, Paragraph
from reportlab.lib.styles import getSampleStyleSheet
from reportlab.lib.pagesizes import A4
from reportlab.lib.units import inch
from abc import ABC, abstractmethod


class BaseReader(ABC):
    """Base class for file readers"""
    def __init__(self, file_path) -> None:
        self.file_path = file_path

    @abstractmethod
    def read(self):
        pass

    @abstractmethod
    def write(self, data, output_file=None):
        pass


class CustomPdfReader(BaseReader):
    """Custom PDF reader class"""
    def read(self):
        with open(self.file_path, "rb") as f:
            reader = PdfReader(f)
            return "".join(page.extract_text() for page in reader.pages)

    def write(self, data, output_file=None):
        doc = SimpleDocTemplate(
            output_file,
            pagesize=A4,
            bottomMargin=0.4 * inch,
            topMargin=0.6 * inch,
            rightMargin=0.8 * inch,
            leftMargin=0.8 * inch,
        )
        styles = getSampleStyleSheet()
        story = [Paragraph(data if isinstance(data, str) else "\n".join(data), styles["Normal"]), PageBreak()]
        doc.build(story)


class CustomTextReader(BaseReader):
    """Custom text reader class"""
    def read(self):
        with open(self.file_path, "r", encoding="utf-8") as f:
            return f.read()

    def write(self, data, output_file=None):
        with open(output_file, "w", encoding="utf-8") as f:
            f.write(data)


class CustomCsvReader(BaseReader):
    """Custom CSV reader class"""
    def read(self):
        with open(self.file_path, "r", encoding="utf-8") as f:
            return list(csv.reader(f))

    def write(self, data, output_file=None):
        with open(output_file, "w", newline="", encoding="utf-8") as f:
            csv.writer(f).writerows(data)


class ReaderFactory:
    """Factory class to get the appropriate reader based on file type"""
    readers = {
        ".pdf": CustomPdfReader,
        ".txt": CustomTextReader,
        ".csv": CustomCsvReader,
    }

    @staticmethod
    def get_reader(file_path: Path):
        file_path = Path(file_path)
        reader_class = ReaderFactory.readers.get(file_path.suffix)
        if reader_class:
            return reader_class(file_path)
        raise ValueError("Unsupported file type")


def cryptify_string(text, shift):
    """Encrypt/Decrypt text using Caesar cipher"""
    return "".join(
        chr((ord(char) - (65 if char.isupper() else 97) + shift) % 26 + (65 if char.isupper() else 97))
        if char.isalpha() else char for char in text
    )


def caesar_cipher(data, shift, decrypt=False):
    """Caesar cipher implementation"""
    shift = -shift if decrypt else shift
    if isinstance(data, list):
        return [[cryptify_string(str(item), shift) if isinstance(item, str) else item for item in row] for row in data]
    return cryptify_string(data, shift)
