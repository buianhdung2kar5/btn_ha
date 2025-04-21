function submitForm() {
  const name = document.getElementById('name').value;
  const phone = document.getElementById('phone').value;
  const subject = document.getElementById('subject').value;
  const message = document.getElementById('message').value;

  if (!name || !phone) {
    alert("Vui lòng điền đầy đủ họ tên và số điện thoại.");
    return;
  }

  alert(
    "Yêu cầu đã được gửi!\n\nThông tin:\nHọ tên: " + name +
    "\nSố điện thoại: " + phone +
    "\nTiêu đề: " + subject +
    "\nNội dung: " + message
  );
}
