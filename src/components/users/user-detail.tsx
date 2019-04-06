import * as React from 'react'
import {Avatar, Button, Col, Modal, Row} from 'antd'
import {IUser} from "./interfaces-types/IUser"
import {capitalize} from "../../utils/common";

interface IUserDetail {
    user: IUser
}

const UserDetail = ({ user}: IUserDetail) => {
    const [visible, setVisible] = React.useState(false)

    function setModalVisible(visible) {
        setVisible(visible)
    }

    function handleCancel() {
        setVisible(false)
    }

    return (
        <div className="user-detail">
            <Button type="primary" size="small" onClick={() => setModalVisible(true)}>
                Details
            </Button>
            <Modal
                title="User Details"
                style={{top: 20}}
                visible={visible}
                onOk={() => setModalVisible(false)}
                onCancel={() => setModalVisible(false)}
                footer={[<Button key="return" onClick={() => handleCancel()}>Return</Button>]}>
                <Row className='details-data'>
                    <Col xs={{span: 24, offset: 0}} sm={{span: 10, offset: 1}}>
                        <Avatar className="user-avatar" size={180} src={user.picture.large}/>
                        <p className="user-data"><b>{capitalize(user.name.title)}</b> {capitalize(user.name.first)+ ' ' +capitalize(user.name.last)}</p>
                    </Col>
                    <Col className="user-data" xs={{span: 24, offset: 0}} sm={{span: 12, offset: 1}}>
                        <p><b>Street:</b> {capitalize(user.location.street)}</p>
                        <p><b>City:</b> {capitalize(user.location.city)}</p>
                        <p><b>State:</b> {capitalize(user.location.state)}</p>
                        <p><b>Nationality:</b> {capitalize(user.nat)}</p>
                        <p><b>Postcode:</b> {user.location.postcode}</p>
                        <p><b>Phone:</b> {user.phone}</p>
                        <p><b>Cell:</b> {user.cell}</p>
                    </Col>
                </Row>
            </Modal>
        </div>
    )
}

export default UserDetail