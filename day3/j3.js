function isEligibleForExam(attendancePercentage) {
    if (attendancePercentage < 80) {
      return "Not eligible";
    } else {
      return "Eligible";
    }
  }
  
  // Example usage:
  let attendance = 75;
  let eligibility = isEligibleForExam(attendance);
  console.log(eligibility); 
  
  attendance = 85; Output: Eligible
  eligibility = isEligibleForExam(attendance);
  console.log(eligibility); 
  
  
  attendance = 80;
  eligibility = isEligibleForExam(attendance);
  console.log(eligibility); 