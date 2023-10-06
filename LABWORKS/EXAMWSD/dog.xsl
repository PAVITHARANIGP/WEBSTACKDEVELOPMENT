<<<<<<< HEAD
<?xml version="1.0" encoding="UTF-8"?>

<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
<xsl:template match="/Dogs">
<html>
  <body>
    <h1>Canine Details</h1>
    <table border="1">
      <tr>
        <th>breed</th>
        <th>colour</th>
        <th>country</th>
      </tr>
      <xsl:for-each select="dog">
        <tr>
          <td><xsl:value-of select="breed"/></td>
          <td><xsl:value-of select="colour"/></td>
          <td><xsl:value-of select="country"/></td>
        </tr>
      </xsl:for-each>
    </table>
  </body>
</html>
</xsl:template>
=======
<?xml version="1.0" encoding="UTF-8"?>

<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
<xsl:template match="/Dogs">
<html>
  <body>
    <h1>Canine Details</h1>
    <table border="1">
      <tr>
        <th>breed</th>
        <th>colour</th>
        <th>country</th>
      </tr>
      <xsl:for-each select="dog">
        <tr>
          <td><xsl:value-of select="breed"/></td>
          <td><xsl:value-of select="colour"/></td>
          <td><xsl:value-of select="country"/></td>
        </tr>
      </xsl:for-each>
    </table>
  </body>
</html>
</xsl:template>
>>>>>>> 9e65785162592f2c180b74c842789233d7e96f80
</xsl:stylesheet>