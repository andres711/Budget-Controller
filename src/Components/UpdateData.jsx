import {dynamicAlert} from "../helpers.js";

function UpdateData({budget,remain}) {
    return (
        <div>
            <div className="alert alert-primary">
                Budget : ${budget}

            </div>
            <div className={dynamicAlert(budget,remain)}>
                Remain: ${remain}
            </div>
        </div>
      );
}

export default UpdateData;