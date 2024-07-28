import { createContext } from 'react'
import { FormInstance } from 'antd'

const EditableContext = createContext<FormInstance<any> | null>(null)

export default EditableContext