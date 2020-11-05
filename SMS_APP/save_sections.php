<!DOCTYPE html>
<html>
<head>
    <title></title>
    <style>
table {
  font-family: arial, sans-serif;
  border-collapse: collapse;
  width: 100%;
}

td, th {
  border: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
}

tr:nth-child(even) {
  background-color: #dddddd;
}
</style>
</head>
<body>

<?php
if (isset($_POST['submit'])) {
    var_dump($_POST);

    $conn = mysqli_connect("localhost", "root", "Admin@sfcs", "sms_app", "3309");
    $check_unique_section = mysqli_query($conn, "SELECT count(*) as no_of_occurnaces FROM section_master where sec_name='" . $_POST["section_name"] . "'");
    $row = mysqli_fetch_array($check_unique_section);
    if ($row['no_of_occurnaces'] >= 1) {
        echo 'we aready have a section with this name if you want to update go back to update form';
    } else {
        $inser_record = mysqli_query($conn, "INSERT INTO `section_master` (`sec_name`, `sec_desc`) VALUES ('" . $_POST["section_name"] . "', '" . $_POST["section_description"] . "')");
    }
    $table = '<table>
  <tr>
    <th>sno</th>
    <th>section Name</th>
    <th>section Description</th>
    <th>Action</th>
  </tr>';
    $ans = mysqli_query($conn, "SELECT * FROM section_master");
    while ($row = mysqli_fetch_array($ans)) {
        $table .= '<tr>
        <td>' . $row["sec_id"] . '</td>
        <td>' . $row["sec_name"] . '</td>
        <td>' . $row["sec_desc"] . '</td>
        <td><a href="updateOrDeleteHandler.php?sec_id='.$row["sec_id"].'&update=update">update</a>||<a href="updateOrDeleteHandler.php?sec_id='.$row["sec_id"].'&delete=delete">delete</a></td>
      </tr>';
    }

    $table .= '</table>';
    echo $table;
}
?>

</body>
</html>