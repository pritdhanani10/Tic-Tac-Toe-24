
import { Form, Link, redirect } from "react-router-dom";


export default function Upload() {
  return (
    <>
      <Form
        className="mx-auto mb-0 mt-8 max-w-md space-y-4 bg-slate-600 text-green-500"
        method="POST"
        encType="multipart/form-data"
      >
        <div>
          <label htmlFor="username" >
            Title
          </label>
          <div className="relative">
            <input
              type="text"
              className="inputs"
              name="title"
              placeholder="Enter Book Title"
              required
            />
          </div>
        </div>

        <div>
          <label htmlFor="text">
            Description
          </label>

          <div className="relative">
            <textarea
              className="inputs"
              name="description"
              placeholder="Enter Description"
              required
            ></textarea>
          </div>
        </div>

        <div>
          <label htmlFor="category" >
            Category
          </label>

          <div className="relative">
            <input
              type="text"
              className="inputs"
              name="category"
              placeholder="Enter category"
              required
            
            />
          </div>
        </div>

        <div>
          <label htmlFor="Cover_image">
            Cover Image
          </label>

          <div className="relative">
            <input
              type="file"
              className="inputs bg-white"
              name="coverImage"
              placeholder="Choose Cover image"
            />
          </div>
        </div>
        <div>
          <label htmlFor="upload_file" >
            File Upload
          </label>

          <div className="relative">
            <input
              type="file"
              className="inputs bg-white"
              name="file"
              placeholder="Choose Cover file"
            />
          </div>
        </div>

        
      

        <div className="flex items-center justify-between">

          <button type="submit" className="btn">
            Submit
          </button>
        </div>
      </Form>
    </>
  );
}

export async function uploadbook(data) {
  console.log(data);
  const formData = await data.request.formData();
  console.log(formData);
  fetch("http://localhost:3000/upload-book", {
    method: "POST",
    
    headers:{
      "Authorization": localStorage.getItem("token"),
    },
    body: formData,

  })
    .then((res) => res.json())
    .then((post) => {
      console.log(post);
    });
  return redirect("/");
}
