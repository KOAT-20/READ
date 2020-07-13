 import React, { Component } from 'react';
 import PropTypes from 'prop-types';
 import axios from 'axios';
 import { withStyles } from '@material-ui/core/styles';
 // import Select from 'react-select';
 import {
   MDBContainer, MDBInput, MDBCard, MDBCardBody,  MDBIcon, MDBRow, MDBCardHeader,
   MDBCol
 } from 'mdbreact';
 import { Select, MenuItem, InputLabel, FormControl } from '@material-ui/core';
 /* Components */
 import BarRecep from '../../pages/recepcion/content/bar_recep.js';

 const styles = theme => ({
   root: {
     display: 'flex',
     flexWrap: 'wrap',
   },
   formControl: {
     margin: theme.spacing.unit,
     minWidth: 250,
   },
   selectEmpty: {
     marginTop: theme.spacing.unit * 2,
   },
 });

class Form extends Component {
   state = {
     nombre: '',
     apellido: '',
     cedula: '',
     edad: '',
     numero_telefono: '',
     correo: '',
     nombre_comunidad: '',
     estado_comunidad: '',
     municipio_comunidad: '',
     parroquia_comunidad: '',
     codigo_postal: '',
     monto_motivo: '',
     motivo: '',
     tipo_motivo: [],
   }

   changeInput = e => {
     this.setState({
       [e.target.name]: e.target.value
     });
     // console.log(`${e.target.name}: ${e.target.value}`);
   }

   submitSlctd = async (e) => {
     e.preventDefault();
     try {
       if (this.state === '') {
         console.log('Por favor completa los campos');
       } else {
         await axios.post('http://localhost:3000/api/comunities', {
           nombre_comunidad: this.state.nombre_comunidad,
           estado_comunidad: this.state.estado_comunidad,
           municipio_comunidad: this.state.municipio_comunidad,
           parroquia_comunidad: this.state.parroquia_comunidad,
         }).then(async comunidad => {
           console.log(comunidad);
           await axios.post('http://localhost:3000/api/reasons', {
             codigo_postal: this.state.codigo_postal,
             monto_motivo: this.state.monto_motivo,
             motivo: this.state.motivo,
           }).then(async motivo => {
             console.log(motivo);
             await axios.post('http://localhost:3000/api/applicants', {
               nombre: this.state.nombre,
               apellido: this.state.apellido,
               cedula: this.state.cedula,
               edad: this.state.edad,
               numero_telefono: this.state.numero_telefono,
               correo: this.state.correo,
               // comunidad.comunity_id,
               // motivo.reason_id
             }).then(result => {
               console.log(result);
             });
           });
         });
         window.alert('Registro existoso!')
       }
     } catch (e) {

     }
   }

   render () {
     const { classes } = this.props;
     return (
      <div>
         <BarRecep />
         <MDBContainer className='mt-5'>
           <form onSubmit={this.submitSlctd}>
             <MDBRow>
               <MDBCol className='h-75'>
                 <MDBCardHeader className='text-center' color='mdb-color'>
                   <h3>
                     <b>Solicitante</b>
                     <MDBIcon icon="user" className="ml-3" />
                   </h3>
                 </MDBCardHeader>
                 <MDBCard>
                   <MDBCardBody>
                     <MDBInput name='nombre' type='text' label='Nombre' icon='user' onChange={this.changeInput} outline />
                     <MDBInput name='apellido' type='text' label='Apellido' icon='user' onChange={this.changeInput} outline />
                     <MDBInput name='cedula' type='number' label='Dni' icon='id-card' onChange={this.changeInput} outline />
                     <MDBInput name='edad' type='number' label='Edad' icon='blind' onChange={this.changeInput} outline />
                     <MDBInput name='numero_telefono' type='number' label='Teléfono' icon='mobile-alt' onChange={this.changeInput} outline />
                     <MDBInput name='correo' type='email' label='Correo' icon='envelope' onChange={this.changeInput} outline />
                   </MDBCardBody>
                 </MDBCard>
               </MDBCol>
               <MDBCol className='h-75'>
                 <MDBCardHeader className='text-center' color='mdb-color'>
                   <h3>
                     <b>Comunidad</b>
                     <MDBIcon icon='home' className='ml-3' />
                   </h3>
                 </MDBCardHeader>
                 <MDBCard style={{height:'436px'}}>
                   <MDBCardBody>
                     <MDBInput name='nombre_comunidad' type='text' label='Nombre Comunidad' icon='home' onChange={this.changeInput} outline />
                     <MDBInput name='estado_comunidad' type='text' label='Estado' icon='map-marker-alt' onChange={this.changeInput} outline />
                     <MDBInput name='municipio_comunidad' type='text' label='Municipio' icon='map-marker-alt' onChange={this.changeInput} outline />
                     <MDBInput name='parroquia_comunidad' type='text' label='Parroquia' icon='map-marker-alt' onChange={this.changeInput} outline />
                     <MDBInput name='codigo_postal' type='text' label='Codigo Postal' icon='hashtag' onChange={this.changeInput} outline />
                   </MDBCardBody>
                 </MDBCard>
               </MDBCol>
             </MDBRow>

            <MDBRow className='mt-4 mb-4'>
              <MDBCol>
                <MDBCardHeader className='text-center' color='mdb-color'>
                  <h3>
                    <b>Motivo de Solicitud</b>
                    <MDBIcon icon="book" className="ml-3" />
                  </h3>
                </MDBCardHeader>
                <MDBCard>
                  <MDBCardBody>
                    <MDBRow style={{marginLeft:2}}>
                      <MDBIcon className ='mt-4' icon='check' size='2x' />
                      <div>
                        <FormControl className={classes.formControl}>
                          <InputLabel htmlFor="cargo_empleado">
                            Tipo de Solicitud
                          </InputLabel>
                          <Select
                            className='btn-group'
                            value={this.state.tipo_motivo}
                            onChange={this.changeInput}
                            inputProps={{
                              name: 'tipo_motivo',
                              id: 'tipo_motivo',
                            }}
                            >
                            <MenuItem value=''>
                              <em>Ninguno</em>
                            </MenuItem>
                            <MenuItem value='Monetaria'>Monetaria</MenuItem>
                            <MenuItem value='Social'>Social</MenuItem>
                            <MenuItem value='Cultural'>Cultural</MenuItem>
                            <MenuItem value='Humanitaria'>Humanitaria</MenuItem>
                            <MenuItem value='Medica'>Medica</MenuItem>
                            <MenuItem value='Tecnologica'>Tecnologica</MenuItem>
                          </Select>
                        </FormControl>
                      </div>
                    </MDBRow>
                    <MDBInput name='monto_motivo' type='number' label='Monto a solicitar' icon='money-bill-wave' onChange={this.changeInput} outline />
                    <MDBInput name='motivo' type='textarea' label='Describa el motivo' icon='pencil-alt' onChange={this.changeInput} outline />
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
              <MDBCol>
                <MDBCardHeader className='text-center' color='mdb-color'>
                  <h3>
                    <b>Envio de Solicitud</b>
                    <MDBIcon icon="paper-plane" className="ml-3" />
                  </h3>
                </MDBCardHeader>
                <MDBCard style={{height:'276px'}}>
                  <MDBCardBody>
                    <div className='text-center' style={{marginTop:'15%'}}>
                      <button  className='btn btn-success' type='submit' size='lg'>
                        Guardar <MDBIcon icon='check' className='ml-2' />
                      </button>
                      <button className='btn btn-danger' size='lg'>
                        Cancelar <MDBIcon far icon='times-circle' className='ml-2' />
                      </button>
                    </div>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
            </MDBRow>
           </form>
         </MDBContainer>
      </div>
     );
   }
 }

 Form.propTypes = {
   classes: PropTypes.object.isRequired,
 };

 export default withStyles(styles)(Form);
