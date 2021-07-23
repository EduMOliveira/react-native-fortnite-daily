import React from "react";

import Common from "../../assets/images/common.svg";
import Dark from "../../assets/images/dark.svg";
import Epic from "../../assets/images/epic.svg";
import Dc from "../../assets/images/dc.svg";
import Frozen from "../../assets/images/frozen.svg";
import GamingLegends from "../../assets/images/gamingLegends.svg";
import IconSeries from "../../assets/images/iconSeries.svg";
import Lava from "../../assets/images/lava.svg";
import Legendary from "../../assets/images/legendary.svg";
import Marvel from "../../assets/images/marvel.svg";
import Rare from "../../assets/images/rare.svg";
import Shadow from "../../assets/images/shadow.svg";
import Slurp from "../../assets/images/slurp.svg";
import StarsWars from "../../assets/images/starsWars.svg";
import Uncommon from "../../assets/images/uncommon.svg";

import { useResponsive } from "../../hooks/useResponsive";

type IProps = {
  type: string;
};

export function ItemClipPath({ type }: IProps) {
  const { wr } = useResponsive();

  const data: any = {
    common: <Common width={wr(47)} height={wr(47)} />,
    dark: <Dark width={wr(47)} height={wr(47)} />,
    epic: <Epic width={wr(47)} height={wr(47)} />,
    dc: <Dc width={wr(47)} height={wr(47)} />,
    frozen: <Frozen width={wr(47)} height={wr(47)} />,
    platform: <GamingLegends width={wr(47)} height={wr(47)} />,
    icon: <IconSeries width={wr(47)} height={wr(47)} />,
    lava: <Lava width={wr(47)} height={wr(47)} />,
    legendary: <Legendary width={wr(47)} height={wr(47)} />,
    marvel: <Marvel width={wr(47)} height={wr(47)} />,
    rare: <Rare width={wr(47)} height={wr(47)} />,
    shadow: <Shadow width={wr(47)} height={wr(47)} />,
    slurpseries: <Slurp width={wr(47)} height={wr(47)} />,
    starwars: <StarsWars width={wr(47)} height={wr(47)} />,
    uncommon: <Uncommon width={wr(47)} height={wr(47)} />,
  };

  return data[`${type}`];
}
