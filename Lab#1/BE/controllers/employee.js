const employee = [
  { id: '1', name: 'Mohamed Sayed' },
];

exports.getEmployees = async (req, res, next) => {
  res.status(200).json({ data: employee });
};

// TODO
exports.deleteEmployee = async (req, res, next) => {
  const id = req.params.id;
  const index = employee.findIndex(emp => emp.id === id);
  if (index !== -1) {
    employee.splice(index, 1);
    res.status(200).json({ success: true, message: "Employee deleted successfully" });
  } else {
    res.status(404).json({ success: false, message: "Employee not found" });
  }

};

// TODO
exports.createEmployee = async (req, res, next) => {
  const { id, name } = req.body;
   // Check if employee with the same ID already exists
   const existingEmployee = employee.find(emp => emp.id === id);
   if (existingEmployee) {
     return res.status(409).json({ success: false, message: 'Employee with the same ID already exists' });
   }  

    // Check if ID and name are provided
  if (!id || !name) {
    return res.status(400).json({ success: false, message: 'Please provide both ID and name' });
  }
 
  employee.push({ id, name });

  res.status(201).json({ success: true, message: "Employee created successfully" });
};


