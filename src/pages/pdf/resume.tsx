import React from "react";
import ReactPDF from '@react-pdf/renderer';
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';

// function Resume() {
//     return (
//         <h1>Hello there</h1>
//     )
// }

// export default Resume

const styles = StyleSheet.create({
    page: {
        flexDirection: 'row',
        backgroundColor: '#E4E4E4'
    },
    section: {
        margin: 10,
        padding: 10,
        flexGrow: 1
    }
});

const MyDocument = () => (
    <Document>
        <Page size="A4" style={styles.page}>
            <View style={styles.section}>
                <Text>Section 1</Text>
            </View>
            <View style={styles.section}>
                <Text>Section 2</Text>
            </View>
        </Page>
    </Document>
);

ReactPDF.renderToStream(<MyDocument />);

// export default MyDocument;

// export default function PDF() {
//     return (
//         <div className="MyDocument">
//             <MyDocument />
//         </div>
//     )
// }