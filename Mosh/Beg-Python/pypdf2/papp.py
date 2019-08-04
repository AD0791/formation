import PyPDF2

# rb = read binary
# num page, rotate and creating new pdf:
"""
with open("NameCons.pdf", "rb") as file:
    reader = PyPDF2.PdfFileReader(file)
    print("num of page", reader.numPages)
    page = reader.getPage(0)
    page.rotateClockwise(90)
    writer = PyPDF2.PdfFileWriter()
    writer.addPage(page)
    # create pdf
    # write binary
    with open("rotate.pdf", "wb") as output:
        writer.write(output)
"""

# combining pdf:
merger = PyPDF2.PdfFileMerger()
files_name = ["rotate.pdf", "NameCons.pdf"]
for file in files_name:
    merger.append(file)
merger.write("combined.pdf")
