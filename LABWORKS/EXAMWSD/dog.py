<<<<<<< HEAD
import xmlschema
from lxml import etree

xml_file="LABWORKS/EXAMWSD/dog.xml"
xsd_file="LABWORKS/EXAMWSD/dog.xsd"

validator=xmlschema.XMLSchema(xsd_file)
if validator.is_valid(xml_file):
    print("XML file is valid aganist the XSD schema.")
else:
    print("XML file is not valid aganist the XSD schema.")
    print(validator.validate(xml_file))



xml_tree = etree.parse("LABWORKS/EXAMWSD/dog.xml")

xsl_tree = etree.parse("LABWORKS/EXAMWSD/dog.xsl")

transformer = etree.XSLT(xsl_tree)
transformed_tree = transformer(xml_tree)
output_html_filename = "dog.html"
with open(output_html_filename, "wb") as output_file:
    output_file.write(transformed_tree)

print(f"Transformation complete. HTML output written to {output_html_filename}")
=======
import xmlschema
from lxml import etree

xml_file="dog.xml"
xsd_file="dog.xsd"

validator=xmlschema.XMLSchema(xsd_file)
if validator.is_valid(xml_file):
    print("XML file is valid aganist the XSD schema.")
else:
    print("XML file is not valid aganist the XSD schema.")
    print(validator.validate(xml_file))



xml_tree = etree.parse("dog.xml")

xsl_tree = etree.parse("dog.xsd")

transformer = etree.XSLT(xsl_tree)
transformed_tree = transformer(xml_tree)
output_html_filename = "output.html"
with open(output_html_filename, "wb") as output_file:
    output_file.write(transformed_tree)

print(f"Transformation complete. HTML output written to {output_html_filename}")
>>>>>>> 9e65785162592f2c180b74c842789233d7e96f80
