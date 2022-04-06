import { getNode } from '@formkit/core'

type FocusFunc = () => void

export default function (name: string): { handleFocus: FocusFunc, focusClass: Ref } {
  const focusClass = ref('');

  onMounted(() => {
    const node = getNode(name);
    node.context.handlers.blur = handleBlur;
  })

  const handleBlur = (): void => {
    focusClass.value = '';
  }

  const handleFocus = () => {
    focusClass.value = 's-form-field-focus'
  }

  return {
    handleFocus,
    focusClass,
  }
}