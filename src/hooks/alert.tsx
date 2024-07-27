import { notification } from "antd"
import { useCallback } from "react"

const useNotificationApi = () => {
  const [api] = notification.useNotification()

  const openNotification = useCallback((message: string | undefined) => {
    api.success({
      message: message,
      placement: 'topRight',
    });
  }, [api])

  return { openNotification }
}
export default useNotificationApi