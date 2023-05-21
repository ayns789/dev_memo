import Header from '../../components/Header';
import ArrPush from '../../components/subComponents/Array/Array_push';
import ArrPop from '../../components/subComponents/Array/Array_pop';
import ArrShift from '../../components/subComponents/Array/Array_shift';
import ArrUnshift from '../../components/subComponents/Array/Array_unshift';
import Objects from '../../components/subComponents/Object/GlobalObjects';
import styles from './index.module.css';

const Homepage = () => {
  return (
    <div>
      <Header />
      <div className={styles.contentCards}>
        <ArrPush />
        <ArrPop />
        <ArrShift />
        <ArrUnshift />
        <Objects />
      </div>
    </div>
  );
};

export default Homepage;
