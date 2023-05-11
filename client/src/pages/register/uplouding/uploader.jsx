
import { useEffect, useState } from "react"
import axios from "axios"

const Uploader = ({ file, setFile, label }) => {
  const [selectFile, setSelectFile] = useState(null)

  useEffect(() => {
    if (selectFile) {
      const formData = new FormData();
      formData.append("file", selectFile)
      axios.post("http://localhost:3600/api/upload", formData, {}).then(({ data }) => {
        if (data?.name) {
          setFile(data.name)
        }
      }).catch(err => {
        console.log("error", err)
      })
    }

  }, [selectFile])



  const onSelectFile = (e) => {
    setSelectFile(e.target.files[0])
  }
  return (
    <>
      <input type="file" onChange={onSelectFile} id="file" hidden />
      <input type="file" onChange={onSelectFile} name="file" />
    </>
  )
}

export default Uploader