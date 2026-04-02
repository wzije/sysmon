import { getSystemData } from "../services/system.service.js";
export const getSystemInfo = async (req, res) => {
    const data = await getSystemData();
    res.json(data);
};
//# sourceMappingURL=system.controller.js.map