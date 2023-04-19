import axios from 'axios';
import Axios from 'axios';
import apiconstants from "../static/apiconstants";

export default[
    index,
    show,
    store,
    update,
    destroy
];

function index(setStudents)
{
    const params = new URLSearchParams();
    const url = apiconstants.api_path+'students';
    axios.post(url,params)
    .then(res => {
        console.log(res)
        setStudents(res.data.data)
    })
    .catch(err => {
        console.error(err);
    })

}
function show()
{
    
}
function store()
{
    
}
function update()
{
    
}
function destroy(serial_number,setStudent)
{
    let url = apiconstants.api_path+'delete_student';
    const params = new URLSearchParams();
    params.append('serial_number',serial_number);

    axios.post(url,params)
    .then(res => {
        index(setStudent);
    })
    .catch(err => {
        
    })
}