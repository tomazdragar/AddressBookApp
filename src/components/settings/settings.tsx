import * as React from 'react'
import {connect} from "react-redux"
import {fetchSettings, setLocale} from "./actions/index"
import {fetchUsers} from "../users/actions/index"
import {bindActionCreators} from "redux"
import {Col, Radio, Row} from "antd"

interface ISettings {
    title: string
    subtitle: string
    excerpt: string
    locale: string
    fetchSettings: any
    fetchUsers: any
    setLocale: any
}

const Settings = ({title, subtitle, excerpt, locale, fetchSettings, fetchUsers, setLocale}: ISettings) => {
    React.useEffect(()=>{
        if (!locale || !title || !subtitle || !excerpt) {
            fetchSettings()
        }
    },[locale])

    function setSelectedLocale(locale) {
        setLocale(locale)
        fetchUsers(1, locale)
    }

    return (
        <div className="settings">
            <Row>
                <Col xs={{span: 22, offset: 0}}>
                    <h2>{title}</h2>
                    <h3>{subtitle}</h3>
                    <p className="excerpt">
                        {excerpt}
                    </p>
                    <div className="locale-select">
                        <Radio.Group
                            value={locale}
                            buttonStyle="solid"
                            onChange={(event) => setSelectedLocale(event.target.value)}>
                            <Radio.Button value="gb">GB</Radio.Button>
                            <Radio.Button value="fr">FR</Radio.Button>
                            <Radio.Button value="es">ES</Radio.Button>
                            <Radio.Button value="ch">CH</Radio.Button>
                        </Radio.Group>
                    </div>
                </Col>
            </Row>
        </div>
    )
}

function mapStateToProps(state) {
    return {
        title:  state.settings.title,
        subtitle: state.settings.subtitle,
        excerpt: state.settings.excerpt,
        locale: state.settings.locale
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        fetchSettings,
        fetchUsers,
        setLocale
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Settings)
