import React, { Component } from 'react';
import ArrowUp from 'react-icons/lib/fa/arrow-up'
import ArrowDown from 'react-icons/lib/fa/arrow-down'
//import Comments from 'react-icons/lib/fa/comments'
import SortDown from 'react-icons/lib/fa/sort-desc'
import Edit from 'react-icons/lib/fa/edit'
import Delete from 'react-icons/lib/fa/trash'
import Add from 'react-icons/lib/fa/plus-circle'
import Grid from 'react-bootstrap/lib/Grid'
import Col from 'react-bootstrap/lib/Col'
import Row from 'react-bootstrap/lib/Row'
import ListGroup from 'react-bootstrap/lib/ListGroup'
import ListGroupItem from 'react-bootstrap/lib/ListGroupItem'

class PostDetail extends Component {
  render() {
    return (
      <div>
        <Grid style={{paddingTop:'5px'}}>
          <Row className="show-grid">
            <Col xs={6} >
              <span style={{fontSize: 30, fontWeight: 700}}>
                Title&nbsp;
              </span>
              <span style={{fontSize: 25, fontWeight: 600}}>
                 by Author
              </span>
            </Col>
            <div style={{paddingTop: 17}}>
              <Col xs={2} >
                <ArrowUp /> 15 <ArrowDown />
              </Col>
              <Col xs={2} >
                Timestamp
              </Col>
              <Col xs={1} >
                <Edit />
              </Col>
              <Col xs={1} >
                <Delete />
              </Col>
            </div>
          </Row>

          <Row className="show-grid">
            <ListGroup>
              <ListGroupItem>

                Jean-Marc Bosman was a player for RFC Liège in the Belgian First Division in Belgium whose contract had expired in 1990. He wanted to change teams and move to Dunkerque, a French club. However, Dunkerque refused to meet his Belgian club's transfer fee demand, so Liège refused to release Bosman.[3]

                In the meantime, Bosman's wages were reduced as he was no longer a first-team player.[4] He took his case to the European Court of Justice in Luxembourg and sued for restraint of trade, citing FIFA's rules regarding football, specifically Article 17.

                Judgement	Edit

                On 15 December 1995, the court ruled the system, as it was constituted, placed a restriction on the free movement of workers and was prohibited by Article 39(1) of the EC Treaty (now Article 45 (1) of the Treaty on the functioning of the European Union). Bosman and all other EU footballers were given the right to a free transfer at the expiration of their contracts, with the caveat they were transferring from a club within one EU association to a club within another EU association.

                “	94 the provisions of the Treaty relating to freedom of movement for persons are intended to facilitate the pursuit by Community citizens of occupational activities of all kinds throughout the Community, and preclude measures which might place Community citizens at a disadvantage when they wish to pursue an economic activity in the territory of another Member State (see Case 143/87 Stanton v INASTI [1988] ECR 3877, paragraph 13, and Case C-370/90 The Queen v Immigration Appeal Tribunal and Surinder Singh [1992] ECR I-4265, paragraph 16).
                95 in that context, nationals of Member States have in particular the right, which they derive directly from the Treaty, to leave their country of origin to enter the territory of another Member State and reside there in order there to pursue an economic activity (see, inter alia, Case C-363/89 Roux v Belgium [1991] ECR I-273, paragraph 9, and Singh, cited above, paragraph 17).

                96 Provisions which preclude or deter a national of a Member State from leaving his country of origin in order to exercise his right to freedom of movement therefore constitute an obstacle to that freedom even if they apply without regard to the nationality of the workers concerned (see also Case C-10/90 Masgio v Bundesknappschaft [1991] ECR I-1119, paragraphs 18 and 19).

                97 The Court has also stated, in Case 81/87 The Queen v H.M. Treasury and Commissioners of Inland Revenue ex parte Daily Mail and General Trust plc [1988] ECR 5483, paragraph 16, that even though the Treaty provisions relating to freedom of establishment are directed mainly to ensuring that foreign nationals and companies are treated in the host Member State in the same way as nationals of that State, they also prohibit the Member State of origin from hindering the establishment in another Member State of one of its nationals or of a company incorporated under its legislation which comes within the definition contained in Article 58. The rights guaranteed by Article 52 et seq. of the Treaty would be rendered meaningless if the Member State of origin could prohibit undertakings from leaving in order to establish themselves in another Member State. The same considerations apply, in relation to Article 48 of the Treaty, with regard to rules which impede the freedom of movement of nationals of one Member State wishing to engage in gainful employment in another Member State.

                98 It is true that the transfer rules in issue in the main proceedings apply also to transfers of players between clubs belonging to different national associations within the same Member State and that similar rules govern transfers between clubs belonging to the same national association.

                99 However, as has been pointed out by Mr Bosman, by the Danish Government and by the Advocate General in points 209 and 210 of his Opinion, those rules are likely to restrict the freedom of movement of players who wish to pursue their activity in another Member State by preventing or deterring them from leaving the clubs to which they belong even after the expiry of their contracts of employment with those clubs.

                100 Since they provide that a professional footballer may not pursue his activity with a new club established in another Member State unless it has paid his former club a transfer fee agreed upon between the two clubs or determined in accordance with the regulations of the sporting associations, the said rules constitute an obstacle to freedom of movement for workers.

                101 As the national court has rightly pointed out, that finding is not affected by the fact that the transfer rules adopted by UEFA in 1990 stipulate that the business relationship between the two clubs is to exert no influence on the activity of the player, who is to be free to play for his new club. The new club must still pay the fee in issue, under pain of penalties which may include its being struck off for debt, which prevents it just as effectively from signing up a player from a club in another Member State without paying that fee.

                102 Nor is that conclusion negated by the case-law of the Court cited by URBSFA and UEFA, to the effect that Article 30 of the Treaty does not apply to measures which restrict or prohibit certain selling arrangements so long as they apply to all relevant traders operating within the national territory and so long as they affect in the same manner, in law and in fact, the marketing of domestic products and of those from other Member States (see Joined Cases C-267/91 and C-268/91 Keck and Mithouard [1993] ECR I-6097, paragraph 16).

                103 It is sufficient to note that, although the rules in issue in the main proceedings apply also to transfers between clubs belonging to different national associations within the same Member State and are similar to those governing transfers between clubs belonging to the same national association, they still directly affect players'access to the employment market in other Member States and are thus capable of impeding freedom of movement for workers. They cannot, thus, be deemed comparable to the rules on selling arrangements for goods which in Keck and Mithouard were held to fall outside the ambit of Article 30 of the Treaty (see also, with regard to freedom to provide services, Case C-384/93 Alpine Investments v Minister van Financiën [1995] ECR I-1141, paragraphs 36 to 38).

                104 Consequently, the transfer rules constitute an obstacle to freedom of movement for workers prohibited in principle by Article 48 of the Treaty. It could only be otherwise if those rules pursued a legitimate aim compatible with the Treaty and were justified by pressing reasons of public interest. But even if that were so, application of those rules would still have to be such as to ensure achievement of the aim in question and not go beyond what is necessary for that purpose (see, inter alia, the judgment in Kraus, cited above, paragraph 32, and Case C-55/94 Gebhard [1995] ECR I-0000, paragraph 37).

              </ListGroupItem>
            </ListGroup>
          </Row>
          <Row>
            <Col xs={8} >
              <span style={{fontSize: 25, fontWeight: 600}}>
                Comments 10
              </span>
            </Col>
            <Col xs={2} >
              <span style={{fontSize: 25, fontWeight: 600}}>
                 <Add />
              </span>
            </Col>
            <Col xs={2} >
              <span style={{fontSize: 25, fontWeight: 600}}>
                 Sort By <SortDown/>
              </span>
            </Col>
          </Row>


            <ListGroup>
              <ListGroupItem>
                <Row>
                  <Col xs={8}>
                    Author
                  </Col>
                  <Col xs={2}>
                    <ArrowUp /> 15 <ArrowDown />
                  </Col>
                  <Col xs={1} >
                    <Edit />
                  </Col>
                  <Col xs={1} >
                    <Delete />
                  </Col>
                </Row>
              <Row style={{paddingRight:15, paddingLeft:15}}>
                I am commenting random stuff. Yaay I am commenting
                I am commenting random stuff. Yaay I am commenting
                I am commenting random stuff. Yaay I am commenting
                I am commenting random stuff. Yaay I am commenting
                I am commenting random stuff. Yaay I am commenting
                I am commenting random stuff. Yaay I am commenting
              </Row>
              </ListGroupItem>
            </ListGroup>

        </Grid>
      </div>

    );
  }
}

export default PostDetail;
