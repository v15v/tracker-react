import React from "react";

interface Props {
    onEditSave: any,
    onCloseModal: any,
    value: string
}

const EditHabitModal = ({
                            onEditSave = (f: any) => f,
                            onCloseModal = (f: any) => f,
                            value
                        }: Props) => {
    // Модальное окно для редактирования имени привычки
    return (
        <div className="modal is-active">
            <div className="modal-background"></div>
            <div className="modal-content">
                <input className="input" type="text"
                       placeholder="Введите имя привычки"
                       defaultValue={value}
                       onKeyDown={onEditSave} />
            </div>
            <button className="modal-close is-large"
                    aria-label="close"
                    onClick={onCloseModal}>
            </button>
        </div>
    )
}

export default EditHabitModal