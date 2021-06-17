import React from "react"
import {
  Button,
  Card,
  CardBody,
  Row,
  Col,
  Form,
  FormGroup,
  Input,
  Label
} from "reactstrap"
import { Mail, Lock, Check,  } from "react-feather"
import { history } from "../../../../history"
import Checkbox from "../../../../components/@vuexy/checkbox/CheckboxesVuexy"


import loginImg from "../../../../assets/img/logo/logo.png"
import "../../../../assets/scss/pages/authentication.scss"


class Login extends React.Component {
  state = {
    activeTab: "1",
    email : "admin@admin",
    password: "1234"
  }
  toggle = tab => {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      })
    }
  }
  render() {
    return (
      <Row className="mt-8  justify-content-center">
        <Col
          sm="8"
          xl="7"
          lg="10"
          md="8"
          className="d-flex justify-content-center mt-6"
        >
          <Card className="bg-authentication mt-6 login-card rounded-0 mb-0 w-100">
            <Row className="m-5">
              <Col
                lg="6"
                className="d-lg-block d-none text-center align-self-center px-1 py-0"
              >
                <img src={loginImg} alt="loginImg" className="w-100" />
              </Col>
              <Col lg="6" md="12" className="pt-10">
                <Card className="rounded-0 mb-2 px-2">
                      <CardBody>
                        <h4 className="mb-4">Panel Admin</h4>
                        
                        <Form onSubmit={e => e.preventDefault()}>
                          <FormGroup className="form-label-group position-relative has-icon-left">
                            <Input
                              type="email"
                              placeholder="Email"
                              value={this.state.email}
                              onChange={e => this.setState({ email: e.target.value })}
                            />
                            <div className="form-control-position">
                              <Mail size={15} />
                            </div>
                            <Label>Email</Label>
                          </FormGroup>
                          <FormGroup className="form-label-group position-relative has-icon-left">
                            <Input
                              type="password"
                              placeholder="Password"
                              value={this.state.password}
                              onChange={e => this.setState({ password: e.target.value })}
                            />
                            <div className="form-control-position">
                              <Lock size={15} />
                            </div>
                            <Label>Contraseña</Label>
                          </FormGroup>
                          <FormGroup className="d-flex justify-content-between align-items-center">
                            <Checkbox
                              color="primary"
                              icon={<Check className="vx-icon" size={16} />}
                              label="Recordarme"
                            />
                            
                          </FormGroup>
                          <div className="d-flex justify-content-between">
                           
                            <Button.Ripple color="primary" type="submit" onClick={() => history.push("/page2")}>
                                Iniciar sesión
                            </Button.Ripple>
                          </div>
                        </Form>
                      </CardBody>
                </Card>
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
    )
  }
}
export default Login
