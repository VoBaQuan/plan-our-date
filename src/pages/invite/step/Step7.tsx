import { useInvite } from "../InviteContext";

const Step7 = () => {
   const { formData } = useInvite();

   const showCustomAlert = () => {
      const overlay = document.createElement('div');
      overlay.className = 'custom-alert-overlay';

      const box = document.createElement('div');
      box.className = 'custom-alert-box';

      const text = document.createElement('p');
      text.className = 'custom-alert-text';
      text.innerText
         = 'Cảm ơn em đã kiên nhẫn, bên cạnh và yêu thương anh, anh cũng rất thương em. Có nhiều lúc chúng ta đã gần như mất nhau nhưng cuối cùng chúng ta vẫn bên nhau. Anh không phải người hoàn hảo, anh muốn dành cho em thật nhiều thứ, chỉ cần thấy em hạnh phúc là đủ với anh. Nhưng mà cách anh yêu em đã không tốt, anh sai vì đã để em khóc rất nhiều lần. Vợ ơi, anh chưa bao giờ muốn mất em, anh chỉ mong tình yêu của tụi mình sẽ bình yên hơn, anh rất muốn yêu em và em cũng vậy. Em thật sự là một người con gái tuyệt vời, anh rất cần em trong cuộc đời của anh, hành trình của anh cần có em. Anh xin lỗi, anh yêu thương em nhiều lắm.';

      const btn = document.createElement('button');
      btn.className = 'custom-alert-btn';
      btn.innerText = 'Close';
      btn.onclick = () => overlay.remove();

      box.appendChild(text);
      box.appendChild(btn);
      overlay.appendChild(box);
      document.body.appendChild(overlay);
   }

   return (
      <>
         <h3 className="final-heading">ALMOST THERE!</h3>
         <p
            style={{ textAlign: 'center', marginBottom: '20px', color: 'rgb(85, 85, 85)' }}>
            This is a preview of your interactive invitation.
         </p>
         <div className="recap-container">
            <div className="card date-time-card">
               <div className="card-item">
                  <i className="fas fa-calendar"></i> <span>{formData.selectedDate?.date}</span>
               </div>
               <div className="card-item">
                  <i className="fas fa-clock"></i> <span>{formData.selectedDate?.time}</span>
               </div>
            </div>
            <div className="card food-card">
               <img
                  src={formData.selectedFood?.imgUrl}
                  className="recap-image"
                  loading="lazy"
                  decoding="async">
               </img>
               <div className="card-text">Your chosen meal: <strong>{formData.selectedFood?.name}</strong></div>
            </div>
            <div className="card activity-card">
               <img
                  src={formData.selectedActivity?.imgUrl}
                  className="recap-image"
                  loading="lazy"
                  decoding="async">
               </img>
               <div className="card-text">Your chosen activity: <strong>{formData.selectedActivity?.name}</strong>
               </div>
            </div>
            <div className="card excitement-card">
               <div className="card-text">
                  <i style={{ color: '#ffc107' }} className="fas fa-star"></i> Excitement Level: <strong>{formData.excitementLevel}/10</strong>
               </div>
            </div>
         </div>
         <button
            className="btn send-step"
            onClick={() => showCustomAlert()}>
            Confirm Invitation
         </button>
      </>
   )
}

export default Step7;