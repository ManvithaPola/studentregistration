const express = require('express');
const path = require('path');
const app = express();

// serve static files from public folder
app.use(express.static(path.join(__dirname, 'public')));

// handle GET form submission at /process_get
app.get('/process_get', function (req, res) {
  // Note: checkboxes with same name may appear as a string or array
  const response = {
    stud_name: req.query.sname || '',
    stud_contact: req.query.scon || '',
    stud_gender: req.query.g || '',
    stud_address: req.query.sadd || '',
    stud_hobbies: req.query.shob || [],
    stud_skillset: req.query.sss || [],
    stud_highest_qualification: req.query.shq || '',
    stud_district: req.query.sdis || ''
  };
  console.log('Received form:', response);
  res.json(response);
});

// bind to 0.0.0.0 so container port mapping works
const PORT = process.env.PORT || 8081;
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Student Registration app listening on http://0.0.0.0:${PORT}`);
});
