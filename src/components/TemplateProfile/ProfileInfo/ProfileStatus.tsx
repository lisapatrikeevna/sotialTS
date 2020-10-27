import React, {ChangeEvent} from "react";

type propsType = {
    status: string
    updateStatus: (status: string) => void
}

export class ProfileStatus extends React.Component<propsType, any> {
    state = {
        editMode: false,
        value: this.props.status
    }

    onEditMode = () => {
        this.setState({
            editMode: true,
            value: this.props.status
        })
    }

    offEditMode =() => {
        this.setState({
            editMode: false
        })
        this.props.updateStatus(this.state.value)
    }

    onChangeStatus = (e: ChangeEvent<HTMLInputElement>) => {
        this.setState({
            value: e.currentTarget.value
        })
    }

    componentDidUpdate(prevProps: Readonly<propsType>, prevState: Readonly<any>, snapshot?: any) {
        if (prevProps.status !== this.props.status) {
            this.setState({status: this.props.status})
        }
    }

    render() {
        return (
            <div>
                {!this.state.editMode ?
                    <span onDoubleClick={this.onEditMode}>
                    {this.props.status === '' && 'dont have status'}
                        {this.props.status}

            </span> :
                    <input value={this.state.value} autoFocus
                           onChange={this.onChangeStatus}
                           onBlur={this.offEditMode}/>

                }
            </div>);
    }
}