#!/usr/bin/env python3
"""An encrypt and decrypt Implementation"""


from pypdf import PdfReader
from reportlab.platypus import SimpleDocTemplate, Paragraph, PageBreak
from reportlab.lib.styles import getSampleStyleSheet
from reportlab.lib.units import inch
from reportlab.lib.pagesizes import A4


class CeaserCipher:
    """A class that uses ceaser cipher alogrithim
    to encode and decode a pdf file
    """
    def __init__(self, pdf_file, shift):
        """Initalize variables"""
        self.pdf_file = pdf_file
        self.shift = shift

    def __shift_char(self, char, shift):
        """shift a character by a given shift"""
        if char.isupper():
            return chr((ord(char) + shift - 65) % 26 + 65)
        if char.islower():
            return chr((ord(char) + shift - 97) % 26 + 97)
        return char
    
    def __process_pdf(self, filename, shift):
        """process the pdf file"""
        styles = getSampleStyleSheet()
        styleN = styles['Normal']
        story = []

        reader = PdfReader(self.pdf_file)
        doc = SimpleDocTemplate(
            filename,
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
                res += self.__shift_char(char, shift)
            p = Paragraph(res, styleN)
            res = ""
            story.append(p)
            story.append(PageBreak())
        doc.build(story)

    def encrypt(self):
        """return an encrypted pdf file"""
        self.__process_pdf("encrypted_doc.pdf", self.shift)
    
    def decrypt(self):
        """return a decrypted pdf file"""
        self.__process_pdf("decrypted_doc.pdf", -self.shift)


if __name__ == "__main__":
    cipher = CeaserCipher()
    cipher.decrypt()