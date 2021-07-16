import React from 'react';
import {Row, Col, Card, Button} from 'react-bootstrap';
import Aux from "../../../hoc/_Aux";
import Swal from 'sweetalert2'
import {read} from './api';
import { useParams, Redirect } from "react-router-dom";
import { isAuthenticated } from '../../Auth/admin/api';

export default function One() {
    let { id } = useParams();
    const [values, setValues] = React.useState({
        year:"",
        district:"",
        male1:"",
        female1:"",
        total1:"",
        male2:"",
        female2:"",
        total2:"",
        male3:"",
        female3:"",
        total3:"",
        male4:"",
        female4:"",
        total4:"",
        male5:"",
        female5:"",
        total5:"",
        male6:"",
        female6:"",
        total6:"",
        male7:"",
        female7:"",
        total7:"",
        male8:"",
        female8:"",
        total8:"",
        male9:"",
        female9:"",
        total9:"",
        male10:"",
        female10:"",
        total10:"",
        male11:"",
        female11:"",
        total11:"",
        male12:"",
        female12:"",
        total12:"",
        male13:"",
        female13:"",
        total13:"",
        male14:"",
        female14:"",
        total14:"",
        male15:"",
        female15:"",
        total15:"",
        male16:"",
        female16:"",
        total16:"",
        male17:"",
        female17:"",
        total17:"",
        male18:"",
        female18:"",
        total18:"",
        male119:"",
        female19:"",
        total19:"",
        male20:"",
        female20:"",
        total20:"",
        male21:"",
        female21:"",
        total21:"",
        male22:"",
        female22:"",
        total22:"",
        male23:"",
        female23:"",
        total23:"",
        loading:false,
        redirectToPage:false,
        error:false,
        reload:false,
    })
    const {year, district, male1,female1,total1,male2, female2,total2, male3, female3,total3,male4, female4,total4,male5, female5,total5,male6, female6,total6,male7, female7,total7,male8, female8,total8,male9, female9,total9,male10, female10,total10,male11, female11,total11,male12, female12,total12,male13,female13,total13,male14, female14,total14,male15, female15,total15,male16, female16,total16,male17, female17,total17,male18, female18,total18,male19, female19,total19,male20, female20,total20,male21, female21,total21,male22, female22,total22,male23, female23,total23, loading, error,reload, redirectToPage} = values

    const redirectUser = () => {
        if (redirectToPage){
            return <Redirect to="/admin/population/read" />
        }
    };

    const isLoading= () => {
        if(loading){
            return (
                <Aux>
                    <Row>
                        <Col>
                        <Card>
                            <Card.Header>
                                <Card.Title as="h5">Wait !!!.</Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <Row>
                                    <Col>
                                        <h1>Requesting for Population Projected data</h1>
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

    const isError = () => {
        if(error){
            return (
                <Aux>
                    <Row>
                        <Col>
                        <Card>
                            <Card.Header>
                                <Card.Title as="h5">Error in reading this user .</Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <Row>
                                    <Col>
                                        <h1>Class data failed to read, Try again <Button variant="primary" onClick={handleReload}>Reload</Button> </h1>
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
        setValues({...values, loading:false, error:false, reload:!reload})
    }

    React.useEffect(() => {
        const bootstrap = async ()=>{
            const Auth = isAuthenticated();
            setValues(v => ({...v, loading:true}))
            const data = await read(id, Auth.token);
            if(!data){
                Swal.fire('Oops...', 'internet server error, Please, check your network connection', 'error');
                setValues(v => ({...v, loading:false, error:true}))  
                return  
            }
            if(data.error){
                Swal.fire('Oops...', data.error, 'error')
                setValues(v => ({...v, loading:false, error:true})) 
                return 
            }
            if(data.message){
                setValues(v => ({...v, loading:false, error:false, classCode:data.data.classCode, names:data.data.names}))
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
        }
        bootstrap()
    },[reload, id])

    const Back = async ()=>{
        setValues({...values, redirectToPage:true })
    }
    return (
        <Aux>
            {redirectUser()}
            {isError()}
            {isLoading()}
            <Row>
                <Col>
                    <Card.Header>
                        <Card.Title><Button variant="outline-primary" onClick={Back}>Back..</Button>  </Card.Title>
                    </Card.Header>
                </Col>
            </Row>
            <Row>
                <Card.Body>
                    <Col>Year : {year}</Col><Col> Disaggregation : {district}</Col>
                </Card.Body>
            </Row>
            <Row>
                <Card.Body>
                    <Col>Age 3 (Male) : {male1}</Col><Col> Age 3 (Female): {female1}</Col><Col> Age 3 (Total): {total1}</Col><Col>Age 11 (Male) : {male9}</Col><Col> Age 11 (Female): {female9}</Col><Col> Age 11 (Total): {total9}</Col><Col>Age 19 (Male) : {male17}</Col><Col> Age 19 (Female): {female17}</Col><Col> Age 19(Total): {total17}</Col>
                </Card.Body>
            </Row>
            <Row>
                <Card.Body>
                    <Col>Age 4 (Male) : {male2}</Col><Col> Age 4 (Female): {female2}</Col><Col> Age 4 (Total): {total2}</Col><Col>Age 12 (Male) : {male10}</Col><Col> Age 12 (Female): {female10}</Col><Col> Age 12 (Total): {total10}</Col><Col>Age 20 (Male) : {male18}</Col><Col> Age 20 (Female): {female18}</Col><Col> Age 20 (Total): {total18}</Col>
                </Card.Body>
            </Row>
            <Row>
                <Card.Body>
                    <Col>Age 5 (Male) : {male3}</Col><Col> Age 5 (Female): {female3}</Col><Col> Age 5 (Total): {total3}</Col><Col>Age 13 (Male) : {male11}</Col><Col> Age 13 (Female): {female11}</Col><Col> Age 13 (Total): {total11}</Col><Col>Age 21(Male) : {male19}</Col><Col> Age 21 (Female): {female19}</Col><Col> Age 21 (Total): {total19}</Col>
                </Card.Body>
            </Row>
            <Row>
                <Card.Body>
                    <Col>Age 6 (Male) : {male4}</Col><Col> Age 6 (Female): {female4}</Col><Col> Age 6 (Total): {total4}</Col><Col>Age 14 (Male) : {male12}</Col><Col> Age 14(Female): {female12}</Col><Col> Age 14 (Total): {total12}</Col><Col>Age 22 (Male) : {male20}</Col><Col> Age 22 (Female): {female20}</Col><Col> Age 22 (Total): {total20}</Col>
                </Card.Body>
            </Row>
            <Row>
                <Card.Body>
                    <Col>Age 7 (Male) : {male5}</Col><Col> Age 7 (Female): {female5}</Col><Col> Age 7 (Total): {total5}</Col><Col>Age 15 (Male) : {male13}</Col><Col> Age 15 (Female): {female13}</Col><Col> Age 15 (Total): {total13}</Col><Col>Age 23 (Male) : {male21}</Col><Col> Age 23 (Female): {female21}</Col><Col> Age 23 (Total): {total21}</Col>
                </Card.Body>
            </Row>
            <Row>
                <Card.Body>
                    <Col>Age 8 (Male) : {male6}</Col><Col> Age 8(Female): {female6}</Col><Col> Age 8 (Total): {total6}</Col><Col>Age 16 (Male) : {male14}</Col><Col> Age 16 (Female): {female14}</Col><Col> Age 16 (Total): {total14}</Col><Col>Age 24 (Male) : {male22}</Col><Col> Age 24(Female): {female22}</Col><Col> Age 24(Total): {total22}</Col>
                </Card.Body>
            </Row>
            <Row>
                <Card.Body>
                    <Col>Age 9 (Male) : {male7}</Col><Col> Age 9(Female): {female7}</Col><Col> Age 9 (Total): {total7}</Col><Col>Age 17 (Male) : {male15}</Col><Col> Age 17 (Female): {female15}</Col><Col> Age 17(Total): {total15}</Col><Col>Age 25 (Male) : {male23}</Col><Col> Age 25 (Female): {female23}</Col><Col> Age 25(Total): {total23}</Col>
                </Card.Body>
            </Row>
            <Row>
                <Card.Body>
                    <Col>Age 10 (Male) : {male8}</Col><Col> Age 10(Female): {female8}</Col><Col> Age 10 (Total): {total8}</Col><Col>Age 18 (Male) : {male16}</Col><Col> Age 18 (Female): {female16}</Col><Col> Age 18(Total): {total16}</Col>
                </Card.Body>
            </Row>
        </Aux>
    )
}
