import { FC, useEffect } from 'react';
import { projectAction } from 'store/actions';

import { useAppDispatch } from '../../hooks/hooks';
import { useAppSelector } from '../../hooks/use-app-selector/use-app-selector.hook';
import styles from './style.module.scss';

const App: FC = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(projectAction.getById({
      id: 1,
    }));
  }, []);

  const { project  } = useAppSelector(({ project  }) => ({
    project: project.project,
  }));

  return <h1 className={styles.h1}>{
    project?.id ?? 'No data'
  }</h1>;
//   return (
//     <div>
//       <h1 className={styles.h1}>Проекти</h1>
//     </div>);
};

export { App };
