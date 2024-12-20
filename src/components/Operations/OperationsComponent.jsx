import './operations.scss'
import stage1Image from '../../assets/images/stage1.png'
import stage2Image from '../../assets/images/stage2.png'
import stage3Image from '../../assets/images/stage3.png'
import stage4Image from '../../assets/images/stage4.png'
const OperationsComponent = () => {
    const stageDefinitions = [
        {
            id: 1,
            stageNo: 'étape n°1',
            title: 'Créez votre don',
            description: `Prenez quelques photos, ajoutez les détails comme la taille et l’état, et publiez facilement votre annonce en quelques clics.`,
            image: stage1Image
        },
        {
            id: 2,
            stageNo: 'étape n°2',
            title: 'Recevez une demande',
            description: `Soyez averti d'un intérêt pour votre don. Une notification vous informe dès qu’un acheteur est intéressé par votre annonce.`,
            image: stage2Image
        },
        {
            id: 3,
            stageNo: 'étape n°3',
            title: 'Planifiez la rencontre',
            description: `Choisissez un lieu pour la remise : Discutez via l’application et fixez un point de rencontre avec l’acheteur pour récupérer le don.`,
            image: stage3Image
        },
        {
            id: 4,
            stageNo: 'étape n°4',
            title: 'Donnez votre vêtement',
            description: `Rencontrez l’acheteur, donnez votre vêtement et participez à un beau geste pour l'environnement.`,
            image: stage4Image
        }
    ]
    return (
        <section className="operations">
            <div className='operations__container'>
            <div className="operations__heading">
                <h5 className="operations__heading--title">le fonctionnement</h5>
                <h3 className="operations__heading--subtitle">Comment utiliser notre <span className="operations__heading--subtitle--highlight">application mobile ?</span></h3>
                <p className="operations__heading--subtext">
                Découvrez en quelques étapes simples comment publier, gérer et donner vos vêtements grâce à l'application DEEDOMI. De la création de votre don jusqu'à l'accord de récupération, l'application vous accompagne dans chaque étape !
                </p>
            </div>
            <div className='operations__stages'>
                {stageDefinitions.map((stage)=>(
                <div className='operations__stage' key={stage.id} style={{flexDirection: stage.id % 2 === 0 ? 'row-reverse' : 'row'}}>
                    <div className="operations__stage--text">
                        <p className='operations__stage--number'>{stage.stageNo}</p>
                        <h5 className='operations__stage--title'>{stage.title}</h5>
                        <p className='operations__stage--description'>
                            {stage.description}
                        </p>
                    </div>
                    <div className='operations__stage--img'>
                        <img src={stage.image} alt="stage1" height="381px" width="575px"/>
                    </div>
                </div>  
                ))}

            </div>
            </div>
        </section>
    );
}
 
export default OperationsComponent;