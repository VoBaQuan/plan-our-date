import { useEffect, useState } from 'react'
import './App.css'

interface FormData {
  fullName: string;
  age: string;
  address: string;
}

interface Employ {
  id: string,
  fullName: string,
  avatar: string,
  age: string,
  address: string,
  maritalStatus: string
}

function App() {

  const [subjects, setSubjects] = useState<Employ[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch('https://62283f3f9fd6174ca81e6f0f.mockapi.io/api/test/vobaquan')
      .then(response => response.json())
      .then(data => {
        setSubjects(data);
        setIsLoading(false);
      })
      .catch(error => console.error('Lỗi rồi:', error));
  }, []);

  if (isLoading) return <div>Đang tải...</div>;

  // const [formData, setFormData] = useState<FormData>({
  //   fullName: '',
  //   age: '',
  //   address: ''
  // })

  // const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
  //   const { name, value } = e.target;

  //   setFormData((prev) => ({
  //     ...prev,
  //     [name]: value,
  //   }));
  // };

  // const handleSubmit = (e: React.FormEvent) => {
  //   e.preventDefault();
  //   console.log("Dữ liệu Form đã nhập:", formData);
  //   alert(`Chào ${formData.fullName}, dữ liệu đã được in ra console!`);
  // };

  return (
    <div className='app-container'>
      <div className='form-container'>
        return (
        <ul>
          {subjects.map(sub => <li key={sub.id}>{sub.fullName}</li>)}
        </ul>
        );
        {/* <h1>Đăng ký thông tin</h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="fullName">Họ và tên:</label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label htmlFor="age">Tuổi:</label>
            <input
              type="number"
              id="age"
              name="age"
              value={formData.age}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label htmlFor="address">Địa chỉ:</label>
            <input
              type="text"
              id="address"
              name="address"
              value={formData.address}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit">
            Gửi thông tin
          </button>
        </form> */}
      </div>
    </div>
  );

}

export default App
