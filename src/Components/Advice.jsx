function Advice({budget,remain}) {
    return (
        <div>
            <div className="alert alert-primary">
                Budget : ${budget}

            </div>
            <div className="alert">
                Remain: ${remain}
            </div>
        </div>
      );
}

export default Advice;