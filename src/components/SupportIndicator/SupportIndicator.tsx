import { Grid, Tooltip, Typography } from '@mui/material';
import { Variant } from '@mui/material/styles/createTypography';
import React from 'react';

/*
 * A generic UI element to display support for a claim/by a source in 5 steps from low to high
 */
export interface SupportIndicatorProps {
  /* A number between 0.0 and 1.0 indicating the support for the claim. 0.0 being 'disputing the claim' and 1.0 being 'supporting the claim' */
  score: number;
  labels: string[];
  tooltips: string[];
}

export const SupportIndicator: React.FC<SupportIndicatorProps> = ({
  score,
  labels,
  tooltips,
}) => {
  const className = 'SupportIndicatorItem';
  const greenClass = ' green-common';
  const redClass = ' red-common';
  const yellowClass = ' yellow-common';
  let toAdd = '';
  if (score < 0.4) toAdd = redClass;
  if (score >= 0.4 && score < 0.6) toAdd = yellowClass;
  if (score >= 0.6) toAdd = greenClass;

  const classNames = [];
  for (let i = 0; i < 5; i++) {
    let newClassName = className;
    if (i == 0 || score >= i / 5) newClassName += toAdd;
    classNames[i] = newClassName;
  }

  const variant: Variant[] = ['subtitle1', 'subtitle1', 'subtitle1'];
  if (score < 0.4) variant[0] = 'h6';
  if (score >= 0.4 && score < 0.6) variant[1] = 'h6';
  if (score >= 0.6) variant[2] = 'h6';

  return (
    <div className={'SupportIndicatorContainer'}>
      <div className={'SupportIndicator'}>
        {classNames.map((item) => {
          return <div className={item} key={Math.random()}></div>;
        })}
      </div>
      <Grid container justifyContent={'space-between'}>
        <Grid item>
          <Tooltip title={tooltips[0]} arrow>
            <Typography variant={variant[0]}>{labels[0]}</Typography>
          </Tooltip>
        </Grid>
        <Grid item>
          <Tooltip title={tooltips[1]} arrow>
            <Typography variant={variant[1]}>{labels[1]}</Typography>
          </Tooltip>
        </Grid>
        <Grid item>
          <Tooltip title={tooltips[2]} arrow>
            <Typography variant={variant[2]}>{labels[2]}</Typography>
          </Tooltip>
        </Grid>
      </Grid>
    </div>
  );
};

export default SupportIndicator;