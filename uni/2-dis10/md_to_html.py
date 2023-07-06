import markdown, os, sys

current_path = os.path.dirname(os.path.abspath(__file__))
markdown_path = os.path.join(current_path, "notes_DIS10_30-06.md")
html_path = os.path.join(current_path, "index.html")

with open(markdown_path, "r") as file:
    markdown_text = file.read()

html_content = markdown.markdown(markdown_text)

with open(html_path, 'w') as file:
    file.write(f"<!DOCTYPE html>\n<html>\n<head>\n<title>DIS10</title>\n<link rel=\"stylesheet\" type=\"text/css\" href=\"styles/styles.css\">\n</head>\n<body>\n{html_content}\n</body>")

print("done.")

