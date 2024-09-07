#!/usr/bin/env python3
"""An encrypt and decrypt Implementation"""


from pypdf import PdfReader
from reportlab.platypus import SimpleDocTemplate, Paragraph, PageBreak
from reportlab.lib.styles import getSampleStyleSheet
from reportlab.lib.units import inch
from reportlab.lib.pagesizes import A4


class CeaserCipher():
    """A class that uses ceaser cipher alogrithim
    to encode and decode a pdf file
    """
    def __init__(self, pdf_file, s):
        """Initalize variables"""
        self.pdf_file = pdf_file
        self.s = s

    def encrypt(self):
        """return an encrypted pdf file"""
        reader = PdfReader(self.pdf_file)
        styles = getSampleStyleSheet()
        styleN = styles['Normal']
        story = []

        pdf_name = "encrypted_doc.pdf"
        doc = SimpleDocTemplate(
            pdf_name,
            pagesize=A4,
            bottomMargin=.4 * inch,
            topMargin=.6 * inch,
            rightMargin=.8 * inch,
            leftMargin=.8 * inch
        )
        res = ""
        for page in reader.pages:
            text = page.extract_text()
            for char in text:
                if (char.isupper()):
                    res += chr((ord(char) + self.s - 65) % 26 + 65)
                elif (char.islower()):
                    res += chr((ord(char) + self.s - 97) % 26 + 97)
                else:
                    res += char
            p = Paragraph(res, styleN)
            res = ""
            story.append(p)
            story.append(PageBreak())
        doc.build(
            story,
        )

    def decrypt(self):
        """return a decrypted pdf file"""
        reader = PdfReader(self.pdf_file)
        styles = getSampleStyleSheet()
        styleN = styles['Normal']
        story = []

        pdf_name = "decrypted_doc.pdf"
        doc = SimpleDocTemplate(
            pdf_name,
            pagesize=A4,
            bottomMargin=.4 * inch,
            topMargin=.6 * inch,
            rightMargin=.8 * inch,
            leftMargin=.8 * inch
        )
        res = ""
        for page in reader.pages:
            text = page.extract_text()
            for char in text:
                if (char.isupper()):
                    res += chr((ord(char) - self.s - 65) % 26 + 65)
                elif (char.islower()):
                    res += chr((ord(char) - self.s - 97) % 26 + 97)
                else:
                    res += char
            p = Paragraph(res, styleN)
            res = ""
            story.append(p)
            story.append(PageBreak())
        doc.build(
            story,
        )

if __name__ == "__main__":
    CeaserCipher().encrypt()
    CeaserCipher().decrypt()