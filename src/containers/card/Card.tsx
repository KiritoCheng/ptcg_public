import React, { useEffect } from "react";
import { connect } from "react-redux";
import { setCardList, selectCardList, fetchCardListAsync } from "./cardSlice";
import { cardTypes } from "../../actions/card/schema";
import { AppDispatch, RootState } from "../../reducers";
import { resolveProxyImg } from "../../libs/units";

interface CardPageDataProps {
  cardList: cardTypes[];
}

interface CardPageEventProps {
  fetchCardList: (p: { category: string; page: number }) => void;
}

interface CardPageProps extends CardPageDataProps, CardPageEventProps {}

class CardPage extends React.Component<CardPageProps> {
  constructor(props: CardPageProps) {
    super(props);
  }

  componentDidMount(): void {
    const { fetchCardList = null } = this.props;
    fetchCardList && fetchCardList({ category: "SWSH5", page: 0 });
  }

  render() {
    const { cardList } = this.props;
    console.log(cardList);
    return (
      <>
        {cardList.map((k) => {
          return (
            <>
              <div>
                {k.id}
                <img src={resolveProxyImg(k.img)} />
              </div>
            </>
          );
        })}
      </>
    );
  }
}

const maToState = (state: RootState) => {
  return {
    cardList: state.card.cardList,
  };
};

const mapToProps = (dispatch: AppDispatch) => {
  return {
    fetchCardList: ({ category, page }: { category: string; page: number }) => {
      dispatch(fetchCardListAsync({ category, page }));
    },
  };
};

export default connect<CardPageDataProps, CardPageEventProps>(
  maToState,
  mapToProps
)(CardPage);
