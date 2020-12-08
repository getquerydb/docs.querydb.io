import { Package } from 'dgeni';
import nestjsContentPackage from '../main-content-package';
import nestjsBasePackage from '../main-base-package';
import { cleanGeneratedFiles } from './processors';

export default new Package('nestjs', [nestjsContentPackage, nestjsBasePackage])
  .processor(cleanGeneratedFiles)
