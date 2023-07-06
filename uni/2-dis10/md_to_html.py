import markdown, os, sys

# richtig relativer markdown path 
# vielleicht mit CSS Verweis und dann css mit dark mode?

current_path = os.path.dirname(os.path.abspath(__file__))
markdown_path = os.path.join(current_path, "notes_DIS10_30-06.md")
html_path = os.path.join(current_path, "index.html")


# Read the Markdown file
with open(markdown_path, "r") as file:
    markdown_text = file.read()

# Convert Markdown to HTML
html = markdown.markdown(markdown_text)

# sys.exit()
# Write the HTML output to a file
with open(html_path, 'w') as file:
    file.write(f"<!DOCTYPE html>\n<html>\n<head>\n<title>DIS10</title>\n<link rel=\"stylesheet\" type=\"text/css\" href=\"styles/styles.css\">\n</head>\n<body>\n{html}\n</body>")

print("done.")

