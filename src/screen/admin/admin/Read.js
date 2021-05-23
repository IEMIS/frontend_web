import React from 'react';
import {Row, Col, Card, Button,} from 'react-bootstrap';
import Aux from "../../../hoc/_Aux";
import Swal from 'sweetalert2'
import { reads} from './api';
import { Link } from 'react-router-dom';
import SortableTbl from "react-sort-search-table";
//import ImageLoader from "../../components/imageLoader/ImageLoader";
import styled from "styled-components";

/*
export default class Read extends Component {
    _isMounted = false;
    //constructor(props){
        //super(props);
        //this.
        state={
            data:[ { level: "1", created_at: "2021-04-05T23:23:17.583Z", _id: "606b9bea48baa50036878b6f"},],
            loading:false,
            error:false,
            reload:false,
        };
    //}
    

    bootstrap = async () => {
        this.setState({loading:true})
        const data = await reads();
        if(!data){
            Swal.fire('Oops...', 'internet server error, Please, check your network connection', 'error');
            this.setState({loading:false, error:true })
            return 
        }
        if(data.error){
            Swal.fire('Oops...', data.error, 'error');
            this.setState({loading:false, error:true })
            return
        }
        if(data.message){
            this.setState({loading:false, error:false, data})
            Swal.fire('Successful', data.message, 'success');
            let Toast = Swal.mixin({
                toast: true,
                timerProgressBar: true,
                position: 'top-end',
                showConfirmButton: false,
                timer: 3000
            });

            Toast.fire({
                showClass: true,
                type: 'success',
                title: data.message
            })

            return 
        } 
    };

    componentDidMount(){
        this._isMounted = true;
        this.bootstrap()
    }

    componentDidUpdate(prevProps, prevState){
        const {reload} = this.state;
        if(prevState.reload !== reload){
            this.bootstrap()
        }
    }

    UNSAFE_componentWillUnmount() {
        this._isMounted = false;
    }

    handleReload = event =>{
        event.preventDefault();
        const {reload} = this.state;
        this.setState({error:false, loading:true, reload:!reload})
    }

    isLoading = (loading) => {
        //const {loading} = this.state;
        if (loading){
            return (
                <Aux>
                    <Row>
                        <Col>
                        <Card>
                            <Card.Header>
                                <Card.Title as="h5">Wait loading data ...</Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <Row>
                                    <Col>
                                    <h1>Fetching the list of Admin's </h1>
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Card>
                        </Col>
                    </Row>
                </Aux>
            )
        }
    };

    isError = (error) => {
        //const {error} = this.state;
        if(error){
            return (
                <Aux>
                    <Row>
                        <Col>
                        <Card>
                            <Card.Header>
                                <Card.Title as="h5">Error in Loading Data.</Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <Row>
                                    <Col>
                                        <h1>Admin data Failed to load, you can refresh <Button variant="primary" onClick={this.handleReload}>Reload</Button> </h1>
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Card>
                        </Col>
                    </Row>
                </Aux>
            )
        }
    };

    ViewData = (data) =>{
        //const {data } =this.state;

        console.log(data);

        if(data && data.length > 0){
            return(
                <Aux>
                    <Row>
                        <Col>
                            <Card>
                                <Card.Header>
                                    <Card.Title as="h5">Admin users</Card.Title>
                                    <span className="d-block m-t-5">manage  <code>the </code> Admin data here</span>
                                </Card.Header>
                                <Card.Body>
                                    <Table responsive>
                                        <thead>
                                            <tr>
                                                <th>First Name</th>
                                                <th>Last Name</th>
                                                <th>Email</th>
                                                <th>Phone</th>
                                                <th>Edit</th>
                                                <th>Detail</th>
                                                <th>Delete</th>
                                            </tr>
                                        </thead>
                                        {
                                            data.map((dat, i)=>{
                                                return(
                                                    <tbody key={i}>
                                                        <tr key={i}>
                                                            <th scope="row">{dat.firstName}</th>
                                                            <td>{dat.lastName}</td>
                                                            <td>{dat.email}</td>
                                                            <td>{dat.phone}</td>
                                                            <td ><Link to={`/admin/users/edit/${dat._id}`}>Edit</Link></td>
                                                            <td  variant="primary"><Link to={`/admin/users/read/${dat._id}`}>Detail</Link></td>
                                                            <td  variant="danger"><Link to={`/admin/users/delete/${dat._id}`}>Delete</Link></td>
                                                        </tr>
                                                    </tbody>

                                                )
                                            })
                                        }
                                    </Table>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Aux>
            )        
        }
        else{
            return (
                <Aux>
                    <Row>
                        <Col>
                            <Card>
                                <Card.Header>
                                    <Card.Title as="h5">No record</Card.Title>
                                </Card.Header>
                                <Card.Body>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Aux>
            )
        }
      
    }



    render() {
        const {loading, error, data,  } =this.state;

        return (
            <Aux>
                { error ? this.isError(error) : ( loading ? this.isLoading(loading) : this.ViewData(data) )}
            </Aux>
        )
    }
}

*/

export default function Read() {
    const [datas, setDatas] = React.useState([]);
    const [loading, setLoading] = React.useState(false)
    const [error, setError] = React.useState(false)
    const [reload, setReload] = React.useState(false)

    /*
    const [values, setValues] = React.useState({
        datas:[],
        loading: false,
        error:false,
        reload:false,
    })
    */

    //const {datas,loading, error, reload } = values;
   /*
    const bootrap = async () => {
        setValues({...values, loading:true})
        const data = await reads();
        if(!data){
            Swal.fire('Oops...', 'internet server error, Please, check your network connection', 'error')
            return setValues({...values, loading:false, error:true})
        }
        if(data.error){
            Swal.fire('Oops...', data.error, 'error')
            return setValues({...values, loading:false, error:true})
        }
        if(data.message){
            Swal.fire('Oops...', data.message, 'success')
            setValues({...values, datas:data.data, loading:false, error:false})
        }
        let Toast = Swal.mixin({
            toast: true,
            timerProgressBar: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 3000
        });

        return Toast.fire({
            showClass: true,
            type: 'success',
            title: data.message
        })
    }

    */
    

    

    const isError = () => {
        if(error){
            return (
                <Aux>
                    <Row>
                        <Col>
                        <Card>
                            <Card.Header>
                                <Card.Title as="h3">Error in Loading Data.</Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <Row>
                                    <Col>
                                        <h1>Admin data Failed to Load, you can refresh <Button variant="primary" onClick={handleReload}>Reload</Button> </h1>
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Card>
                        </Col>
                    </Row>
                </Aux>
            )
        }
    };

    const isLoading = () => {
        if (loading){
            return (
                <Aux>
                    <Row>
                        <Col>
                        <Card>
                            <Card.Header>
                                <Card.Title as="h5">Wait loading data ...</Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <Row>
                                    <Col>
                                    <h1>Fetching the list of Admin's </h1>
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Card>
                        </Col>
                    </Row>
                </Aux>
            )
        }
    };

    const handleReload = event =>{
        event.preventDefault();
        setError(false)
        setLoading(true)
        setReload(!reload) 
    }

    let columun = [
        "firstName",
        "lastName",
        "email",
        "phone",
        "edit",
        "detail",
        "delete",
    ];
    let tableHead = [
        "First Name",
        "Last name",
        "Email",
        "Phone",
        "Edit",
        "Details",
        "Delete",
    ];

    const Wrap = styled.div`
	max-width: 1200px;
	margin: 0 auto;
    `;

    const BtnEdit = styled(Link)`
        padding: 10px 20px;
        cursor: pointer;
        border-radius: 3px;
        background-color: #f0ad4e;
        color: #fff;
    `;
    const BtnDetail = styled(Link)`
        padding: 10px 20px;
        cursor: pointer;
        border-radius: 3px;
        background-color: #3F4D67;
        color: #fff;
    `;

    const BtnDelete = styled(Link)`
        padding: 10px 20px;
        cursor: pointer;
        border-radius: 3px;
        background-color: #d43f3a;
        color: #fff;
    `;

    const DetailsComponent = (props) => {
        const { rowData} = props;
        return (
            <td  variant="primary"><BtnDetail to={`/admin/users/read/${rowData._id}`}> Details </BtnDetail></td>
        );
    };

    const DeleteComponent = (props) => {
        const { rowData} = props;
        return (
            <td variant="danger"><BtnDelete to={`/admin/users/delete/${rowData._id}`}>Delete</BtnDelete></td>
        );
    };

    const EditComponent = (props) => {
        const { rowData} = props;
        return (
            <td ><BtnEdit to={`/admin/users/edit/${rowData._id}`}>Edit</BtnEdit></td>
        );
    };

    const ViewData = () =>{
        if(datas && datas.length > 0){
            return(
                <Aux>
                    <Row>
                        <Col>
                            <Card>
                                <Card.Header>
                                    <Card.Title as="h5">Admin users</Card.Title>
                                    <span className="d-block m-t-5">manage  <code>the </code> Admin data here</span>
                                </Card.Header>
                                <Card.Body>
                                    {
                                    /*
                                    <Table responsive>
                                        <thead>
                                            <tr>
                                                <th>First Name</th>
                                                <th>Last Name</th>
                                                <th>Email</th>
                                                <th>Phone</th>
                                                <th>Edit</th>
                                                <th>Detail</th>
                                                <th>Delete</th>
                                            </tr>
                                        </thead>
                                        {
                                            datas.map((data, i)=>{
                                                return(
                                                    <tbody key={i}>
                                                        <tr key={i}>
                                                            <th scope="row">{data.firstName}</th>
                                                            <td>{data.lastName}</td>
                                                            <td>{data.email}</td>
                                                            <td>{data.phone}</td>
                                                            <td ><Link to={`/admin/users/edit/${data._id}`}>Edit</Link></td>
                                                            <td  variant="primary"><Link to={`/admin/users/read/${data._id}`}>Detail</Link></td>
                                                            <td  variant="danger"><Link to={`/admin/users/delete/${data._id}`}>Delete</Link></td>
                                                        </tr>
                                                    </tbody>
                                                )
                                            })
                                        }
                                    </Table>
                                    */
                                    }
                                    <SortableTbl
                                        tblData={datas}
                                        tHead={tableHead}
                                        customTd={[
                                            { custd: DetailsComponent, keyItem: "detail" },
                                            { custd: EditComponent, keyItem: "edit" },
                                            { custd: DeleteComponent, keyItem: "delete" },
                                        ]}
                                        dKey={columun}
                                        search={true}
                                    />
                                
                                </Card.Body>
                                
                            </Card>
                        </Col>
                    </Row>
                </Aux>
            )        
        }else{
            /*
            return (
                <Aux>
                    <Row>
                        <Col>
                            <Card>
                                <Card.Header>
                                    <Card.Title as="h5">No record</Card.Title>
                                </Card.Header>
                                <Card.Body>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Aux>
            )
            */
        }
    }

    const boot = async () => {
        setLoading(true)
        const data = await reads();
        if(!data){
            Swal.fire('Oops...', 'internet server error, Please, check your network connection', 'error')
            setLoading(false)
            setError(true)
            return 
        }
        if(data.error){
            Swal.fire('Oops...', data.error, 'error')
            setLoading(false)
            setError(true)
            return
        }
        if(data.message){
            setLoading(false)
            setError(false)
            setDatas(data.data)
            Swal.fire('Successful', data.message, 'success');
            
            let Toast = Swal.mixin({
                toast: true,
                timerProgressBar: true,
                position: 'top-end',
                showConfirmButton: false,
                timer: 3000
            });
    
            Toast.fire({
                showClass: true,
                type: 'success',
                title: data.message
            })
        }
       
    }

    React.useEffect(() => {
        boot()
        /*
        return () => {
            boot()
        }
        */
    },[reload])


    return (
        <Aux>
            { 
            //error ? isError() : ( loading ? isLoading() : ViewData() )
            }
            {isLoading()}
            {isError()}
            {ViewData()}
            <Wrap>
            </Wrap>
        </Aux>
    )
}


