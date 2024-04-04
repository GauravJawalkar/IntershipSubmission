import ATO from "./ATO"
import AlertText from "./AlertText"
import ClaimDiscount from "./ClaimDiscount"


const Alert = () => {
    return (
        <div className='px-6 py-3 bg-amber-200 w-full'>
            <div className="flex items-center gap-4">
                <ATO />
                <AlertText text={"Your AI Storyboarding Bundle Discount expires in "} />
                <ClaimDiscount />
            </div>
        </div>
    )
}

export default Alert