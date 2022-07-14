import React, { useState , useEffect } from 'react'
import parse from 'html-react-parser';
import emailjs from 'emailjs-com';
import axios from 'axios';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import reader from 'xlsx'
  
// Reading our test file



function Mail() {
    function handle(e){
        // console.log(e.target.value)
        if(e.target.name=='sel'){
            setSee(e.target.value)

        }
        if(e.target.name=='subject'){
            setSubject(e.target.value)

        }
        if(e.target.name=='send'){
          setSend(e.target.value)

      }
    }

    // useEffect(() => {
    //     const fetchPosts = async () => {
    //       const res = await axios.get('http://localhost:5000/');
    //     //   console.log(res.data)
    //       setDatae(res.data)
    //     };
    
    //     fetchPosts();
    //   }, []);
    const [text, setText] = useState('')
    const [subject, setSubject] = useState('')
    const [img, setImg] = useState('')
    const [send, setSend] = useState('')
    const [imgname, setImgname] = useState('')
    const [imgdata, setImgdata] = useState(new FormData())
    const [datae, setDatae] = useState([])
    const [see, setSee] = useState('')
    console.log(datae);

    const sendEmail =  (e) => {
        e.preventDefault();
        alert('Email is sent')
        // console.log('post wala---',imgdata)
        
      
            const data = new FormData()
            data.append('file',imgdata)
            console.log('data---post',data)
            console.log('imgdata---post',imgdata)

            
			 axios.post(`http://localhost:5000/mail/da/${imgname}`, {
				content:text,
                subject:subject,
                img:img,
                see:see,
                send:send,
                data:data,
                datae:datae
			}).then(res=>{
		console.log('send')

            })
        
		. catch ((error) =>{
			console.error(error)
		})
        

       
    };
    return (
      
        <form encType="multipart/form-data" onSubmit={sendEmail} className='container'>
      
           
            <div  class="form-group">
                <label for="exampleInputPassword1">Email Send to</label>
                <input onChange={handle} name='send' type="text" class="form-control" id="exampleInputPassword1" placeholder="abc@gmail.com,xyz@gmail.com...." />
            </div>
            <div   class="form-group">
                <label for="exampleFormControlSelect1">BCC</label>
                {/* <select name='sel' onChange={handle} class="form-control" id="exampleFormControlSelect1">
                    <option>All Users</option>
                    <option>Only Golf Users</option>
                    <option>Without Golf Users</option>

                </select> */}
                <input onChange={handle} name='sel' type="text" class="form-control" id="exampleInputPassword1" placeholder="abc@gmail.com,xyz@gmail.com...." />

            </div>
       
            <div class="form-group">
                <label for="exampleInputPassword1">Email Subject</label>
                <input onChange={handle} name='subject' type="text" class="form-control" id="exampleInputPassword1" placeholder="Email Subject" />
            </div>

            <div class="form-group">
                <label for="exampleInputPassword1">Content</label>
                <input style={{display:'none'}} onChange={e => { console.log(e.target.value) }} value={text} name='content' type="text" class="form-control" id="exampleInputPassword1" placeholder="Email Subject" />

                <CKEditor
                    editor={ ClassicEditor }
                    data={text}
                    
                    onChange={ ( event, editor ) => {
                        const data = editor.getData();
                        setText(data)
                    } }
                  
                />
            </div>
            
            <div  class="form-group">
                <label for="exampleFormControlFile1">File</label>
                <input onChange={e=>{console.log(e.target.files)
                    // let files = e.target.files;
                    // let reader = new FileReader();
                    // reader.readAsDataURL(files[0]);
                    // reader.onload=(e)=>{
                    //     console.log('dataaaa==--',e.target);
                    //     const formdata = {file:e.target.result}
                    //     axios.post('http://localhost:5000/mail',{
                    //         file:e.target.result
                    //     }).then(res=>{console.log('2 mail goo',res);})
                    //     .catch(e=>{console.log(e);})
                    // }
                    const file =e.target.files[0]
                    // setFile(e.target.files[0])
                    setImgdata(file)

                    console.log('file--cha',file);
                    setImgname(file.name)
                    console.log('file--chaNmae',file.name);
                    const data = new FormData()
                    data.append('file',file)
                    // setImgdata(data)
                    
                    // setImgdata(file)

                    // console.log('dad---cha',data);
                    console.log('Imgda---cha',imgdata);
                    // https://email22222.herokuapp.com/
                    axios.post('http://localhost:5000/mail/img',data).then(res=>{console.log('2 mail goo',res);})
                        .catch(e=>{console.log('err',e);})
                    
                
                }} name='file' type="file" class="form-control-file" id="exampleFormControlFile1" />
            </div>

            <div style={{display:'none'}} class="form-group">
                <label for="exampleFormControlFile1">Image</label>
                <input onChange={e=>{console.log(e.target.value)
                setImg(e.target.value)}} name='img' type="file" class="form-control-file" id="exampleFormControlFile1" />
            </div>
            <button type="submit" class="btn d-block w-100 btn-primary">Send</button>
        </form>
    )
}

export default Mail


