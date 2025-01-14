import plant from '../../../../public/SuccessIllustration/plant.svg'
import biker from '../../../../public/SuccessIllustration/biker.svg'
import trail from '../../../../public/SuccessIllustration/trail.svg'

export function OrderConfirmationIllustration() {
  return (
    <div className="relative w-full overflow-hidden border-b-2 border-gray-500 px-10">
      <div className="flex min-w-[26rem] flex-col">
        <div className="z-20 flex">
          <img
            src={trail}
            alt="rastro que fica atrás da moto para dar sensação de velocidade"
            className="trail-animation-loop"
          />
          <img
            src={biker}
            alt="motoby em cima da moto com entrega"
            className="biker-animation-loop"
          />
        </div>
        <img
          src={plant}
          alt="planta com movimento lateral"
          className="plant-animation-loop size-24"
        />
      </div>
    </div>
  )
}
