function SendAppeal() {
   let inputTextarea = document.getElementById("textarea"),
      inputTextareaValue = inputTextarea.value;

   const newAppeal = {
      message: inputTextareaValue
   };

   fetch("http://localhost:3000/anonymous", {
      method: "POST",
      headers: {
         "Content-Type": "application/json"
      },
      body: JSON.stringify(newAppeal)
   })
      .then(res => {
         if (!res.ok) throw new Error(res.status);
         return res.json();
      })
      .then(data => {
         console.log("Нове повідомлення успішно додано:", data);
      })
      .catch(error => {
         console.error("Помилка при додаванні нового повідомлення:", error);
      });
}