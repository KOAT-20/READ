 import React, { Component } from 'react';
 import { withStyles } from '@material-ui/core/styles';
 import PropTypes from 'prop-types';
 // import Select from 'react-select';
 import {
   MDBContainer, MDBInput, MDBBtn, MDBCard, MDBCardBody,  MDBIcon, MDBRow,  MDBModal,
   MDBModalHeader,  MDBModalBody, MDBModalFooter, MDBCardHeader, MDBCol
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

   toggle = nr => () => {
     let modalNumber = 'modal' + nr
       this.setState({
       [modalNumber]: !this.state[modalNumber]
     });
   }

   render () {
     const { classes } = this.props;
     return (
      <div>
         <BarRecep />
         <MDBContainer className='mt-5'>
           <form>
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
                     <MDBInput id='nombre' type='text' label='Nombre' icon='user' outline />
                     <MDBInput id='apellido' type='text' label='Apellido' icon='user' outline />
                     <MDBInput id='cedula' type='number' label='Dni' icon='id-card' outline />
                     <MDBInput id='edad' type='number' label='Edad' icon='blind' outline />
                     <MDBInput id='numero_telefono' type='number' label='Teléfono' icon='mobile-alt' outline />
                     <MDBInput id='correo' type='email' label='Correo' icon='envelope' outline />
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
                     <MDBInput id='nombre_comunidad' type='text' label='Nombre' icon='user' outline />
                     <MDBInput id='estado_comunidad' type='text' label='Nombre' icon='user' outline />
                     <MDBInput id='municipio_comunidad' type='text' label='Nombre' icon='user' outline />
                     <MDBInput id='parroquia_comunidad' type='text' label='Nombre' icon='user' outline />
                     <MDBInput id='codigo_postal' type='text' label='Nombre' icon='user' outline />
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
                            onChange={this.handleChange}
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
                    <MDBInput id='monto_motivo' type='number' label='Monto a solicitar' icon='money-bill-wave' outline />
                    <MDBInput id='motivo' type='textarea' label='Describa el motivo' icon='pencil-alt' outline />
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
                      <button  className='btn btn-success' type='submit' size='lg' onClick={this.toggle(1)}>
                        Guardar <MDBIcon icon='check' className='ml-2' />
                      </button>
                      <button className='btn btn-danger' size='lg' onClick={this.toggle(2)}>
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
