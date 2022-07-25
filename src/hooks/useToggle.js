import { useState } from "react";

const useToggle = () => {
    const [val, setVal] = useState()
    return [val, () => setVal((v) => !v)]
}

export default useToggle;