import React, { useEffect, useState } from "react";

export const ProfileStatusWithHooks = (props) => {

    let [editMode, setEditMode] = useState(false)
    let [status, setStatus] = useState(props.status)

    useEffect(() => {
        setStatus(props.status)
    }, [props.status])

    const activateEditMode = () => {
        setEditMode(true)
    }

    const deactivateEditMode = () => {
        setEditMode(false)
        // this.props.updateStatus(this.state.status)
    }

    const onStatusChange = (e) => {props.updateStatus(e.currentTarget.value)
    }

    return (
        <div>
            { !editMode &&
                <div>
                    <span onDoubleClick={ activateEditMode }>{ status }</span>
                </div>
            }
            { editMode &&
                <div>
                    <input onChange={ onStatusChange } autoFocus={ true } onBlur={ deactivateEditMode }
                           value={ status }/>
                </div>
            }
        </div>
    )
}

export default ProfileStatusWithHooks