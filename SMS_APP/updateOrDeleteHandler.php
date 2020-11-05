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
$conn = mysqli_connect("localhost", "root", "Admin@sfcs", "sms_app", "3309");
if (isset($_GET['delete']) && isset($_GET['sec_id'])) {
    $check_unique_section = mysqli_query($conn, "SELECT * FROM section_master where sec_id='" . $_GET["sec_id"] . "'");
    $row = mysqli_fetch_array($check_unique_section);
    if ($row) {
        $check_unique_section = mysqli_query($conn, "DELETE FROM section_master where sec_id='" . $_GET["sec_id"] . "'");
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
          <td><a href="updateOrDeleteHandler.php?sec_id=' . $row["sec_id"] . '&update=update">update</a>||<a href="updateOrDeleteHandler.php?sec_id=' . $row["sec_id"] . '&delete=delete">delete</a></td>
        </tr>';
        }

        $table .= '</table>';
        echo $table;
    } else {
        echo 'No records found with given data';
    }
}

if (isset($_GET['update']) && isset($_GET['sec_id'])) {
    $check_unique_section = mysqli_query($conn, "SELECT * FROM section_master where sec_id='" . $_GET["sec_id"] . "'");
    $row = mysqli_fetch_array($check_unique_section);
    if ($row) {
        echo '
        <form action="" method="POST">
        <label>section Name</label>
        <input type="text" name="section_name" value="' . $row['sec_name'] . '"/>
        <label>section Descriptin</label>
        <input type="text" name="section_description" value="' . $row['sec_desc'] . '" />
        <label>click here to submit</label>
        <input type="submit" name="submit" />
        <input type="hidden" name="sec_id" value="' . $row['sec_id'] . '"/>
        </form>';
    } else {
        echo 'No records found with given data';
    }
}

if (isset($_POST['submit'])) {
    $check_unique_section = mysqli_query($conn, "SELECT count(*) as no_of_occurnaces FROM section_master where sec_name='" . $_POST["section_name"] . "'");
    $row = mysqli_fetch_array($check_unique_section);
    if ($row['no_of_occurnaces'] >= 1) {
        echo 'we aready have a section with this name if you want to update go back to update form';
    } else {
        $inser_record = mysqli_query($conn, "UPDATE `section_master` SET `sec_name` = '".$_POST["section_name"] ."' , `sec_desc` = '".$_POST["section_description"] ."' WHERE `sec_id` = '".$_POST["sec_id"] ."'");
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
        <td><a href="updateOrDeleteHandler.php?sec_id=' . $row["sec_id"] . '&update=update">update</a>||<a href="updateOrDeleteHandler.php?sec_id=' . $row["sec_id"] . '&delete=delete">delete</a></td>
      </tr>';
    }

    $table .= '</table>';
    echo $table;
}

?>

</body>
</html>