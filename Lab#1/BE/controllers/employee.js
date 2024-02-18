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
  employee.push({ id, name });
  res.status(201).json({ success: true, message: "Employee created successfully" });
};


