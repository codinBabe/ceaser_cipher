## Caesar Cipher Algorithm for PDF Encryption and Decryption

**Fork/Clone the Repository**

```bash
git clone https://github.com/codinBabe/ceaser_cipher.git
```

---

**Set Up and start Virtual Environment**

_For Windows:_

```bash
python -m venv cipher
source cipher/Scripts/activate
```

_For macOS/Linux:_

```bash
python3 -m venv cipher
source cipher/bin/activate
```

---

**Install Dependencies**

```bash
pip install -r requirements.txt
```

---

**Usage:**

_To encrypt or decrypt a PDF, add the PDF file you wish to process, and pass the number of shift positions you want._

_Encryption Example:_

```python
cipher = CeaserCipher("My_pdf.pdf", 3)
cipher.encrypt()
```

_Decryption Example:_

```python
cipher = CeaserCipher("My_encrypted_pdf.pdf", 3)
ciher.decrypt()
```

---

**Note:**
This is a work in progress, and I will update it as I learn more.
Feel free to drop a star ⭐ to encourage me!
