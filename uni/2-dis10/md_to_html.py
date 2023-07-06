import markdown 
import sys

# richtig relativer markdown path 
# vielleicht mit CSS Verweis und dann css mit dark mode?

# notes_DIS10_30-06

# Read the Markdown file
with open("notes_DIS10_30-06.md", "r") as file:
    markdown_text = file.read()

# Convert Markdown to HTML
html = markdown.markdown(markdown_text)

print(html)
sys.exit()
# Write the HTML output to a file
with open('index.html', 'w') as file:
    file.write(html)

