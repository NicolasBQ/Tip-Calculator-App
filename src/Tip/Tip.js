import React from "react"


const Tip = () => {
    return (
        <div>
            <label>Select Tip %</label>
            <div>
                <button>
                    5%
                </button>
                <button>
                    10%
                </button>
                <button>
                    15%
                </button>
                <button>
                    25%
                </button>
                <button>
                    50%
                </button>
                <button>
                    Custom
                </button>
            </div>
        </div>
    )
}

export { Tip }